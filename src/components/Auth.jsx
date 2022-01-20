import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";

import classes from "./Auth.module.css";

const Auth = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPsw, setEnteredPsw] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const pswChangeHandler = (event) => {
    setEnteredPsw(event.target.value);
  };

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPsw);

    dispatch(authActions.login());
    setEnteredEmail("");
    setEnteredPsw("");
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={pswChangeHandler}
              value={enteredPsw}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
