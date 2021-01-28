import React from "react";
import HeroesList from "../UI/Heroes/HeroesList";

const MarvelScreen = () => {
  return (
    <HeroesList
    animation={"animate__animated animate__bounceInRight"}
      publisher={"Marvel Comics"}
    />
  );
};

export default MarvelScreen;
