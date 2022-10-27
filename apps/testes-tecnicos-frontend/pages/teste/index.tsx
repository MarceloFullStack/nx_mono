import React, {useState} from 'react';
import {useCount} from "../../redux/store/useCount";
import {Button, Grid, Stack} from "@mui/material";
import RecipeReviewCard from "../../../../libs/soteste/src/lib/soteste";

const IndexPage: React.FC = () => {
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const {count, countIncrement, countDecrement, countIncrementByAmount} = useCount();

  return (
    <Grid container-fluid spacing={2}>
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
        <RecipeReviewCard/>
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
          <Grid item xs={12}>
            <button onClick={() => countIncrement()}>incrementar 1</button>
            <button onClick={() => countDecrement()}>decrementar 1</button>
            <Stack spacing={2} direction="row">
              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
            </Stack>
          </Grid>
        </div>
      </div>
    </Grid>


  );
};

export default IndexPage;
