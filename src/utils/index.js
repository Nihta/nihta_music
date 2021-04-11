export * from './permission';

/**
 * TODO: Thêm param số bỏ qua mục đích để random tránh bài hiện tại
 * Generates a random number in the specified range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const randomNumberInRange = (min, max) => {
  const rn = Math.random() * (max - min) + min;
  return Math.trunc(rn);
};
