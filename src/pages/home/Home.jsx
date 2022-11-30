import React from "react";
import GamesCard from "../../components/game-card/GamesCard";
import CategoriesBar from "../../components/categories-bar/CategoriesBar";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1>Hello</h1>

      <CategoriesBar />
      <GamesCard />
    </Container>
  );
};

export default Home;
