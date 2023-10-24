import React, { useEffect, useState } from "react";
import { urlCharacters } from "../../Hooks/useCharacters";
import axios from "axios";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Character } from "../../models/character";
import { Button, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./SingleCharacter.css";

export const SingleCharacter = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);

  const changeCharacter = (id: number) => {
    navigate(`/characters/${id}`);
  };
  useEffect(() => {
    axios.get<Character>(`${urlCharacters}/${id}`).then((response) => {
      setCharacter(response.data);
    });
  }, [id]);
  return (
    <div>
      <div className="single-character">
        <Button
          style={{ marginRight: "5px" }}
          variant="outline-secondary"
          onClick={() => changeCharacter(Math.max(1, Number(id) - 1))}
        >
          {"<--"}
        </Button>
        <Card className="single-card">
          <Card.Img
            style={{ width: "50%" }}
            variant="top"
            src={character?.image}
          />
          <Card.Body>
            <Card.Title>{character?.name}</Card.Title>
            <ListGroup.Item>
              <span>Status:</span> {character?.status}
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Species:</span> {character?.species}
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Type:</span> {character?.type}
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Gender:</span> {character?.gender}
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to={`${character?.origin?.url}`}>
                <span>Origin:</span> {character?.origin?.name}{" "}
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to={`${character?.location?.url}`}>
                <span>location:</span> {character?.location?.name}{" "}
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Created:</span> {character?.created}
            </ListGroup.Item>
          </Card.Body>
        </Card>
        <Button
          style={{ marginLeft: "5px" }}
          variant="outline-secondary"
          onClick={() => changeCharacter(Number(id) + 1)}
        >
          {"-->"}
        </Button>
      </div>
      <div className="container pb-5">
        <h3>Episode</h3>
        <div className="row">
          {character?.episode?.map((item, index) => {
            return (
              <div className="col-1 item-episode" key={index}>
             
                  <Button onClick={()=> navigate(`/episodes/${id}`)} variant="outline-secondary">{index + 1}</Button>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
