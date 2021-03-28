// * https://github.com/reduxjs/reselect
// import {createSelector} from 'reselect';

/**
 * Lấy theme hiện tại
 * @param {*} state
 * @returns {string}
 */
export const themeSelector = state => state.setting.theme;
