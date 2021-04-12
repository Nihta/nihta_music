export * from './permission';

/**
 * TODO: Thêm param số bỏ qua mục đích để random tránh bài hiện tại
 * Generates a random number in the specified range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const randomIntegerInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
