// * Đặt tên action kiểu domain/eventName
export const SET_THEME = 'setting/SET_THEME';

// * Actions -------------------------------------------------------------------

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

// * Selector ------------------------------------------------------------------

/**
 * Lấy theme hiện tại
 * @param {*} state
 * @returns {string}
 */
export const themeSelector = state => state.setting.theme;

// * Reducer -------------------------------------------------------------------
const initialState = {
  theme: 'light',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};
