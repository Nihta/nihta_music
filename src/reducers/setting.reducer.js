const INITIAL_STATE = {
  theme: 'light',
};

export default function (state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case 'SET_THEME':
      return {...state, theme: payload};
    default:
      return state;
  }
}
