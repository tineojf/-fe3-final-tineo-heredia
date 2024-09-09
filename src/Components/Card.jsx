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
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="../../public/images/doctor.jpg"
        className="card-img-top"
        alt={id}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">@{username}</li>
        <li className="list-group-item">
          <Link
            to={routesList.detail + id}
            className="card-link link-offset-2 link-underline link-underline-opacity-0"
          >
            Detail: #{id}
          </Link>
        </li>
      </ul>
      <div className="card-body">
        <button onClick={addFav} className="btn btn-md btn-warning">
          Add fav
        </button>
      </div>
    </div>
  );
};

export default Card;
