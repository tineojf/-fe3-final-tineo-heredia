import { Link } from "react-router-dom";
import { routesList } from "../Routes/routesList";
import { useContextGlobal } from "./utils/useContextFunction";
import DetailCard from "./DetailCard";

const Card = (propiedades) => {
  const { item, entorno } = propiedades;
  const { name, username, id } = item;

  const { state, dispatch } = useContextGlobal();

  const addFav = () => {
    dispatch({ type: isFav ? "REMOVE-FAV" : "ADD-FAV", payload: item });
  };

  if (entorno == "detail") {
    return <DetailCard item={item} />;
  }

  const isFav = state.favs.find((fav) => fav.id == id);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="/images/doctor.jpg" className="card-img-top" alt={id} />
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
          {isFav ? "Remove" : "Add"} Fav
        </button>
      </div>
    </div>
  );
};

export default Card;
