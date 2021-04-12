export * from './permission';

/**
 * TODO: Thêm param số bỏ qua mục đích để random tránh bài hiện tại
 * Generates a random number in the specified range.
 * @param {number} min
 * @param {number} max
 * @param {number} ignore
 * @returns {number}
 */
export const randomIntegerInRange = (min, max, ignore) => {
  let res = 0;
  do {
    res = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (max - min > 1 && res !== ignore);
  return res;
};
