export * from './permission';

/**
 * Generates a random number in the specified range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const randomNumberInRange = (min, max) => {
  const rn = Math.random() * (max - min) + min;
  return Math.trunc(rn);
};

export const getRandomNumber = (min, max) => {
  let random = Math.round(Math.random() * (max - min) + min);
  return random >= max ? random - 1 : random;
};
