import {useMemo} from 'react'

import { Redirect,useParams,Link } from "react-router-dom";
import { getHeroesById } from "../../../Selectors/getHeroesById";
import { Image,Button } from "antd";
const HeroeScreen = ({history}) => {
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
  if (!hero) {
    return <Redirect to="/" />;
  }
  const {
    id,
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className=" row mt-5">
      <div className="col-4">
        <Image
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="animate__animated animate__fadeInLeft img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <br/>
        <h5>Characters</h5>
        <p>{characters}</p>
        <Link to={publisher==="DC Comics"?"/dc":"/"}>        
        <Button type="primary" size="large">Regresar</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroeScreen;
