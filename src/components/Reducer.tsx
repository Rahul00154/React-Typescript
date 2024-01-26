import { useReducer } from 'react';

type StateType = {
  count: number;
};

type ActionType =
  | { type: 'Increment'; payload: number }
  | { type: 'Decrement'; payload: number };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + action.payload };

    case 'Decrement':
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

const initialState: StateType = {
  count: 0,
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({
      type: 'Increment',
      payload: 1,
    });
  };

  const decrement = () => {
    dispatch({
      type: 'Decrement',
      payload: 1,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Reducer;
