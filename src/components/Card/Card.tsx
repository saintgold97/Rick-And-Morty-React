import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import { Profile } from "../Profile/Profile";
import { BodyCard } from "../BodyCard/BodyCard";

type CardProps = {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
};

export const Card = (props: CardProps) => {
  const { name, status, species, gender, image, origin } = props;
  return (
    <section>
      <div className="card">
        <Profile img={image} />
        <BodyCard
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin}
        />
      </div>
    </section>
  );
};
