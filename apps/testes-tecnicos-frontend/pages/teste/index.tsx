import React, {useState} from 'react';
import {useCount} from "../../redux/store/useCount";

const IndexPage: React.FC = () => {
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const {count, countIncrement, countDecrement, countIncrementByAmount} = useCount();

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
      <h1>Contador monorepo {count}</h1>
      <h2>Numero atual :{count}</h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => countIncrementByAmount(Number(incrementAmount))}
        >
          valor
        </button>
      </div>
      <div>
        <button onClick={() => countIncrement()}>incrementar 1</button>
        <button onClick={() => countDecrement()}>decrementar 1</button>
      </div>
    </div>
  );
};

export default IndexPage;
