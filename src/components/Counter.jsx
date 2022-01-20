import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  // use redux store state  in this component
  const counter = useSelector((state) => state.counter.counter);

  // useSelector for toggling operation
  const toggleCounter = useSelector((state) => state.counter.showCounter);

  // function for dispatch an action
  const dispatch = useDispatch();

  // function for increment action
  const inrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const dcrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={inrementHandler}>Inrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={dcrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
