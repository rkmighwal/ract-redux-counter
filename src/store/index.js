import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
//   if (action.type === ACTION_TYPES.INCREMENT) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === ACTION_TYPES.INCRESE) {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === ACTION_TYPES.DECREMENT) {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === ACTION_TYPES.TOGGLE) {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
