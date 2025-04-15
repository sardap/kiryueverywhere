export enum FinalGuess {
  NotFinal,
  Win,
  Lose,
}

function StringToFinalGuess(v: number): FinalGuess {
  switch (v) {
    case 0:
      return FinalGuess.NotFinal;
    case 1:
      return FinalGuess.Win;
    case 2:
      return FinalGuess.Lose;
  }
  return FinalGuess.NotFinal;
}

export interface guessHistoryEntry {
  x: number;
  y: number;
  final_guess: FinalGuess;
}

export interface guessCookie {
  guesses: Record<number, guessHistoryEntry[]>;
}

function getCookie(document: Document, cname: string) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function resetCookie(document: Document, cookie_name: string): void {
  const d = new Date();
  d.setTime(d.getTime());
  const expires = "expires=" + d.toUTCString();
  document.cookie = cookie_name + "=" + "{}" + ";" + expires;
}

const old_guesses_cookie_key = "guesses";
const guesses_cookie_key = "new_guesses";

export function resetGuessesCookie(document: Document): void {
  resetCookie(document, guesses_cookie_key);
}

export function getGuesses(document: Document): guessCookie {
  const old_cookie = getCookie(document, old_guesses_cookie_key);
  if (old_cookie != "") {
    resetCookie(document, old_guesses_cookie_key);
  }

  const result: guessCookie = { guesses: {} };

  const guess_cookie_string = getCookie(document, guesses_cookie_key);
  if (guess_cookie_string == "") {
    return result;
  }

  const x = guess_cookie_string.substring(1, guess_cookie_string.length - 1);
  const compressed: string[] = JSON.parse(x);
  for (let i = 0; i < compressed.length; i++) {
    let str = compressed[i];
    const loc_number = str.split("X")[0];
    str = str.split("X")[1];
    const entires = str.split("Y");
    const locations: guessHistoryEntry[] = [];
    for (let j = 0; j < entires.length - 1; j++) {
      const splits: string[] = entires[j].split(",");
      locations.push({
        x: Number(splits[0]),
        y: Number(splits[1]),
        final_guess: StringToFinalGuess(Number(splits[2])),
      });
    }
    result.guesses[Number(loc_number)] = locations;
  }

  return result;
}

export function saveGuesses(
  document: Document,
  current_cookie: guessCookie
): void {
  const d = new Date();
  d.setTime(d.getTime() + 36500 * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();

  const reduced: string[] = [];
  for (let i = 0; i < 1000; i++) {
    if (i in current_cookie.guesses) {
      const guess = current_cookie.guesses[i];
      let reduced_str = `${i}X`;
      for (const loc_guess of guess) {
        reduced_str += `${loc_guess.x},${loc_guess.y},${loc_guess.final_guess}Y`;
      }
      reduced.push(reduced_str);
    }
  }

  let str = JSON.stringify(reduced);
  str = str.replaceAll(" ", "");
  str = `{${str}}`;
  if (str.length > 1000) {
    resetCookie(document, guesses_cookie_key);
    return;
  }

  document.cookie = guesses_cookie_key + "=" + str + ";" + expires;
}

export function getGuessesForLocation(
  document: Document,
  location_number: number
): guessHistoryEntry[] {
  const guesses_cookie = getGuesses(document);
  const guesses = guesses_cookie.guesses;
  if (!(location_number in guesses)) {
    return [];
  }
  return guesses[location_number];
}

export function saveGuess(
  document: Document,
  location_number: number,
  x: number,
  y: number,
  final_guess: FinalGuess
): void {
  const current_cookie = getGuesses(document);
  if (!(location_number in current_cookie.guesses)) {
    current_cookie.guesses[location_number] = [];
  }
  current_cookie.guesses[location_number].push({
    x: Number(x.toFixed(2)),
    y: Number(y.toFixed(2)),
    final_guess: final_guess,
  });

  saveGuesses(document, current_cookie);
}

export function finishedToday(
  document: Document,
  current_location: number
): boolean {
  const guesses_cookie = getGuesses(document);
  if (!(current_location in guesses_cookie.guesses)) {
    return false;
  }

  const current_guesses = guesses_cookie.guesses[
    current_location
  ] as guessHistoryEntry[];
  for (let i = 0; i < current_guesses.length; i++) {
    const guess = current_guesses[i];
    if (
      guess.final_guess == FinalGuess.Lose ||
      guess.final_guess == FinalGuess.Win
    ) {
      return true;
    }
  }

  return false;
}
