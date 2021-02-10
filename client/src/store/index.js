import { createStore } from 'redux';

const initialState = {
  color: 'blue',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changeColor') {
    return { ...state, color: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
