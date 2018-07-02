import actions from '../constants/actions';

export default (state = null, action) => {
  switch (action.type) {
    case actions.ERROR:
      return {
        ...state,
        status: action.payload
      };
    default:
  };

  return state;
};
