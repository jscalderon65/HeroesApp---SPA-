import { useMemo} from "react";
import HeroCard from "./HeroCard";
import { getHeroesByPublisher } from "../../../Selectors/getHeroesByPublisher";
const HeroesList = ({ publisher,animation}) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  return (
    <div
    className={animation}
      style={{
        display: "grid",
        gridGap: "10px",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fill,minmax(200px,300px))"
      }}
    >
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};

export default HeroesList;
