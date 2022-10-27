import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, selectCount} from "../slices/testesSlices";

export const useCount = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const countIncrement = () => dispatch(increment());
  const countDecrement = () => dispatch(decrement());
  const countIncrementByAmount = (amount: number) => dispatch(incrementByAmount(amount));
  return {count, countIncrement, countDecrement, countIncrementByAmount};
}
