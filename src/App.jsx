import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions";

function App() {
  //CAN ACCESS ENTIRE STATE
  const counter = useSelector( state => state.counter)
  const isLogged = useSelector( state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
       {isLogged? <h3>Shouldn't see this</h3> : ""}
    </div>
  );
}

export default App;
