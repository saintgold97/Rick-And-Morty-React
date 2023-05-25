import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import { Character } from "../../models/character";
import {Card} from "react-bootstrap"
import { useContext } from "react";
import { BackgroundContext, FontContext } from "../Characters/Characters";


export const Cards = ({ name, status, species, gender, image, origin }:Character) => {
  const font = useContext(FontContext)
  const theme = useContext(BackgroundContext)
  return (
    <section>
      <Card className={`card theme-${theme}`} style={{fontSize: `${font}px`}}>
        <Card.Img  variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text><span>Status:</span> {status}</Card.Text>
          <Card.Text><span>Species:</span> {species}</Card.Text>
          <Card.Text><span>Gender:</span> {gender}</Card.Text>
          <Card.Text><span>Origin:</span> {origin.name}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};