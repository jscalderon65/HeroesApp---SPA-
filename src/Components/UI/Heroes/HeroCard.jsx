import React from "react";
import { Image, Button } from "antd";
import { Link } from "react-router-dom";
const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div style={{ padding: "10px",display:"flex" }} className="card">
      <Image
        src={`./assets/heroes/${id}.jpg`}
        className="card-img"
        alt={superhero}
      />
      <div style={{flex:"1"}}>
      <h5 className="card-title">{superhero}</h5>
      <p className="card-text">{alter_ego}</p>
      {alter_ego !== characters && <p className="card-text">{characters}</p>}
      <p className="card-text">
        <small className="text-muted">{first_appearance}</small>
      </p>
      </div>
      <hr/>
      <Button>
        <Link to={`./heroe/${id}`}>Más...</Link>
      </Button>
    </div>
  );
};

export default HeroCard;
