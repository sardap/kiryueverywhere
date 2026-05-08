const first_date = new Date(2022, 6, 28, 0, 0, 0);

function seededRandom(seed: number, min = 0, max = 1): number {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  const num = (((t ^ (t >>> 14)) >>> 0) / 4294967296) * 1000000000;

  return Math.floor((num % (max - min)) + min);
}

export function getDayNumber(today: Date): number {
  const oneDay = 24 * 60 * 60 * 1000;
  const l = today.getTime();
  const r = first_date.getTime();
  return Math.floor(Math.abs((l - r) / oneDay));
}

export function getLocationNumber(date: Date): number {
  const day_number = getDayNumber(date);

  if (day_number <= 639) {
    return day_number;
  }

  console.log("day_number", day_number);

  const max_game = 639;

  // Select a random number between 1 and 639 based on the day.
  // Previous days used an incorrect minimum value. Continue to use it so the history stays the same.
  if (day_number <= 1378) {
    const result = Math.round(seededRandom(day_number, 0, max_game));

    // If result lands at 0, don't return and switch to the corrected randomiser since game 0 doesn't exist.
    if (result > 0) {
      console.log("result", result);
      return result;
    }
  }

  // Randomiser with corrected minimum value
  const result = Math.round(seededRandom(day_number, 1, max_game));
  console.log("result", result);
  return result;
}
