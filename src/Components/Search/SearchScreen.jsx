import { useMemo } from "react";
import queryString from "query-string";
import { useForm } from "my-customhook-collection";
import HeroCard from "../UI/Heroes/HeroCard";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../Selectors/getHeroesByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [formValue, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValue;
  const heroesFiltered = useMemo(() => getHeroesByName(searchText), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
    console.log(q);
  };
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Zona de búsqueda</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearch}>
            <input
              name="searchText"
              className="form-control"
              type="text"
              placeholder="Busca..."
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              style={{ width: "100%" }}
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="animate__animated animate__fadeIn col-7">
          <h4>Resultados {heroesFiltered.length}</h4>
          <hr />
          {
            (q==="")&& <div className="alert alert-info">Busca un héroe</div>
          }
          {
            (q!=="" && heroesFiltered.length===0)&& <div className="alert alert-danger">No se ha encontrado al héroe {q}</div>
          }
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SearchScreen };
