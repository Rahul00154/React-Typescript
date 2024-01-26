import { configureStore, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export type StateType = {
  count: number;
};

const initialState: StateType = {
  count: 0,
};

// const increment = createAction('increment');
// const decrement = createAction('decrement');

// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count -= 1;
//     })
//     .addDefaultCase((state) => {
//       state.count;
//     });
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   //{
//   //if we have to pass multiple reducer we pass using this
//   // root:rootReducer
//   //  }
// });

// export { increment, decrement };

///----------------------------------UsingCreateSlice-------------------------///

const rootSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count + 1;
    },
    decrement: (state) => {
      state.count - 1;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;

export const store = configureStore({
  reducer: rootSlice.reducer,
  // {rootSlice}
  //{
  //if we have to pass multiple reducer we pass using this
  // root:rootReducer
  //  }
});

// export { increment, decrement };
