import React from "react";
import { useSelector } from "react-redux";
import { selectAllGames } from "../../store/features/games/games.slice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const GamesCard = () => {
  const games = useSelector(selectAllGames);

  return (
    <Container>
      <Row>
        {games.map((game) => (
          <Col key={game.id} md={4}>
            <Card style={{ rowGap: "12px" }}>
              <Card.Img variant="top" src={game.thumbnail} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.short_description}</Card.Text>
                <Button variant="primary" disabled>
                  {game.platform}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GamesCard;
