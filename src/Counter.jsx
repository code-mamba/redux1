import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter = (props) => {
  const { name } = props;
  const count = useSelector((state) => state.counter.count);
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setNumber(number - 1);
  };

  return (
    <div style={{ backgroundColor: "grey" }}>
      <h2>{name}</h2>
	  <h2>Vote:{number}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};
export default Counter;
