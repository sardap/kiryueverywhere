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
  // Select a random number between 0 and 639 based on
  const result = Math.round(seededRandom(day_number, 0, 639));
  console.log("result", result);
  return result;
}
