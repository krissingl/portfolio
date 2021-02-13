import { createStore } from 'redux';

const initialState = {
  portfolioStyle: 'bidnez',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changeStyle') {
    return { ...state, portfolioStyle: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
