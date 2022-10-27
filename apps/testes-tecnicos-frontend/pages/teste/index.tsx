import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../../redux/slices/testesSlices';

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <div
      style={{
        background: 'yellow',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>Contador monorepo</h1>
      <h2>Numero atual :{count}</h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          valor
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>incrementar 1</button>
        <button onClick={() => dispatch(increment())}>decrementar 1</button>
      </div>
    </div>
  );
};

export default IndexPage;
