import React, { useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllGames,
  selectGamesList,
} from "../../store/features/games/games.slice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillChrome, AiFillWindows } from "react-icons/ai";

const GamesCard = () => {
  const dispatch = useDispatch();

  const { games, pageScrolled } = useSelector(selectGamesList);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    dispatch(pageScrolled());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container onScroll={() => handleScroll()}>
      <Row>
        {games.map((game) => (
          <Col key={game.id} xs={1} md={4} className="g-4">
            <Card className="h-100">
              <Card.Img variant="top" src={game.thumbnail} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.short_description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" disabled>
                    {game.release_date}
                  </Button>
                  <Button data={game.platform} variant="light" disabled>
                    {
                      {
                        "PC (Windows)": (
                          <AiFillWindows
                            style={{ lineHeight: 0, fontSize: "1.5rem" }}
                          />
                        ),
                        "Web Browser": (
                          <AiFillChrome
                            style={{ lineHeight: 0, fontSize: "1.5rem" }}
                          />
                        ),
                      }[game.platform]
                    }
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GamesCard;
