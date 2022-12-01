import React from "react";
import { useSelector } from "react-redux";
import { selectAllGames } from "../../store/features/games/games.slice";

const CategoriesBar = () => {
  const { filter } = useSelector(selectAllGames);

  return <div>Categories Bar</div>;
};

export default CategoriesBar;
