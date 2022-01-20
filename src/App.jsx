import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Authenticate from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  // get redux state using useSelector hook
  const isAuthenticated = useSelector((state) => state.authenticate.isAuth);

  return (
    <>
      <Header />
      {!isAuthenticated && <Authenticate />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
