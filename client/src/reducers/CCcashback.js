
const CCcashback = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT_CCCASHBACK':
    return state + 0.5;
  case 'DECREMENT_CCCASHBACK':
    return state - 0.5;
  default:
    return state;
  }
};

export default CCcashback;