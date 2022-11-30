import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { loadGames } from "./store/features/games/games.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}

      <Outlet />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
