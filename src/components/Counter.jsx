import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // use redux store state in this component
  const counter = useSelector((state) => state.counter);

  // function for dispatch an action
  const dispatch = useDispatch();

  // function for increment action
  const inrementHandler = () => {
    dispatch({ type: "INCREAMENT" });
  };

  const dcrementHandler = () => {
    dispatch({ type: "DECREAMENT" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={inrementHandler}>Inrement</button>
        <button onClick={dcrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
