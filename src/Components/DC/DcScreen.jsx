import React from "react";
import HeroesList from "../UI/Heroes/HeroesList";

const DcScreen = () => {
  return <HeroesList 
  animation={"animate__animated animate__bounceInLeft"}
  publisher={"DC Comics"} />;
};

export default DcScreen;
