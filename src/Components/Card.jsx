import { Link } from "react-router-dom";
import { routesList } from "../Routes/routesList";
import { useContextGlobal } from "./utils/useContextFunction";

const Card = (propiedades) => {
  const { item, entorno } = propiedades;
  const { name, username, id } = item;

  const { dispatch } = useContextGlobal();

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD-FAV", payload: item });
  };

  if (entorno == "detail") {
    return (
      <div className="card">
        <Link to={routesList.detail + id}>
          <p>ID: {id}</p>
          <p>Nombre: {name}</p>
          <p>Email: {item.email}</p>
          <p>Teléfono: {item.phone}</p>
          <p>Web: {item.website}</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="card">
      <Link to={routesList.detail + id}>
        <p>ID: {id}</p>
        <p>Nombre: {name}</p>
        <p>Usuario: {username}</p>
      </Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
