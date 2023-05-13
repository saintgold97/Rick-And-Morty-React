import "bootstrap/dist/css/bootstrap.css";
import "./BodyCard.css"

type ContentProps = {
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
};

export const BodyCard = (props: ContentProps) => {
  const { name ,status, species, gender, origin } = props;
  return (
    <div className="card-body">
        <h3>{name}</h3>
      <p className="card-text">Status: {status}</p>
      <p className="card-text">Species: {species}</p>
      <p className="card-text">Gender: {gender}</p>
      <p className="card-text">Origin name: {origin.name}</p>  
    </div>
  );
};
