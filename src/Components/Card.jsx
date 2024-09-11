import { Link } from "react-router-dom";
import { routesList } from "../Routes/routesList";
import { useContextGlobal } from "./utils/useContextFunction";
import DetailCard from "./DetailCard";

const Card = (propiedades) => {
  const { item, entorno, favs } = propiedades;
  const { name, username, id } = item;

  const { dispatch } = useContextGlobal();

  const addFav = () => {
    dispatch({ type: "ADD-FAV", payload: item });
  };

  if (entorno == "detail") {
    return <DetailCard item={item} />;
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
      {!favs && (
        <div className="card-body">
          <button onClick={addFav} className="btn btn-md btn-warning">
            Add fav
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
