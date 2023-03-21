import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state)=>state.counter.count)
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h3>{`Count:${count}`}</h3>
      <Counter name="Dhanush" />
      <Counter name = "vijay"></Counter>
    </div>
  );
}

export default App;
