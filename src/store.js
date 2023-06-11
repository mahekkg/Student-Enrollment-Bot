import { createStore } from 'redux';

// Define the initial state
const initialState = {
  user: {
    name: '',
    age: '',
  },
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
