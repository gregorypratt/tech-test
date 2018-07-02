import actions from '../constants/actions';

export default (state = { viewAsDecimal: true }, action) => {
  switch (action.type) {
    case actions.TOGGLE_PRICES:
      return {
        viewAsDecimal: !state.viewAsDecimal
      };
    default:
  };

  return state;
};
