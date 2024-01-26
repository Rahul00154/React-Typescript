import { useState } from 'react';
import {
  increment,
  decrement,
  StateType,
  incrementByValue,
} from '../Redux/redux';
import { useDispatch, useSelector } from 'react-redux';

// interface StateType {
//   count: number;
// }

const Redux = () => {
  const [val, setVal] = useState<number>(0);
  const count = useSelector((state: StateType) => state.count);
  const dispatch = useDispatch();

  const IncreasebyValueHandler = () => {
    dispatch(incrementByValue(val));
  };

  return (
    <div>
      <h1>Redux-Typescript</h1>
      <p>Count:{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button
        disabled={val < 0}
        onClick={IncreasebyValueHandler}
      >
        IncreasebyValue
      </button>
    </div>
  );
};

export default Redux;
