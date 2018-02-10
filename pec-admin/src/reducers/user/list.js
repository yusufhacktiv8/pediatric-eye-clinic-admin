import * as actions from '../../actions';

const defaultState = {
  rows: [],
  count: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.user.list.loadData:
      return { ...state, rows: action.payload.rows, count: action.payload.count };
    default:
      return state;
  }
};
