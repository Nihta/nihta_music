// * Đặt tên action kiểu domain/eventName
export const SET_THEME = 'setting/SET_THEME';

/**
 * Đặt theme cho ứng dụng
 * @param {string} theme
 */
export const setTheme = theme => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};
