import React, { useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllGames,
  selectGamesList,
} from "../../store/features/games/games.slice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import { AiFillChrome, AiFillWindows } from "react-icons/ai";

const GamesCard = () => {
  const dispatch = useDispatch();

  const { games, pageScrolled } = useSelector(selectGamesList);

  console.log(games);

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
            <Card className="h-100" bg="dark" text="light">
              <Card.Img variant="top" src={game.thumbnail} />
              <Card.Body>
                <div className="mb-3">
                  <Card.Title className="fs-2">{game.title}</Card.Title>
                  <div className="fst-italic fs-5">
                    {game.publisher} - {game.developer}
                  </div>
                </div>
                <Card.Text>{game.short_description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between">
                  <Button variant="light" disabled>
                    {game.release_date}
                  </Button>
                  <ButtonGroup data={game.platform}>
                    {game.platform.map(
                      (platform) =>
                        ({
                          "PC (Windows)": (
                            <Button variant="dark" className="px-0" disabled>
                              <AiFillWindows
                                style={{ lineHeight: 0, fontSize: "1.5rem" }}
                              />
                            </Button>
                          ),
                          "Web Browser": (
                            <Button variant="dark" className="px-0" disabled>
                              <AiFillChrome
                                style={{ lineHeight: 0, fontSize: "1.5rem" }}
                              />
                            </Button>
                          ),
                        }[platform])
                    )}
                  </ButtonGroup>
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
