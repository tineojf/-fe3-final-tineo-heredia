import { Link } from "react-router-dom";
import { routesList } from "./routesList";

function NotFound() {
  return (
    <>
      <h1 className="py-4" style={{ fontSize: "6rem" }}>
        Oops!
      </h1>
      <p className="text-center" style={{ fontSize: "2rem", color: "red" }}>
        404 - PAGE NOT FOUND
      </p>
      <p className="text-center pb-4">
        The page you are looking for does not exist.
      </p>
      <p className="text-center pb-4">
        <Link to={routesList.home} className="btn btn-lg btn-warning">
          Go to Home
        </Link>
      </p>
    </>
  );
}

export default NotFound;
