import { createStore } from 'redux';

const initialState = {
  page: 'home',
  portfolioStyle: 'bidnez',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changeStyle') {
    return { ...state, portfolioStyle: action.payload };
  } if (action.type === 'changePage') {
    return { ...state, page: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
