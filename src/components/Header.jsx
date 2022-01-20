import React from "react";
import { useSelector } from "react-redux";
import { authActions } from "../store/AuthStates";
import { useDispatch } from "react-redux";

import classes from "./Header.module.css";

const Header = () => {
  // get redux state using useSelector hook
  const isAuthenticated = useSelector((state) => state.authenticate.isAuth);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Counter</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
