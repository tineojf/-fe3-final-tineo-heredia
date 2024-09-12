import { useContextGlobal } from "../Components/utils/useContextFunction";
import Card from "../Components/Card";

const Favs = () => {
  const { state, dispatch } = useContextGlobal();
  const { favs } = state;

  const favsHTML =
    favs.length == 0
      ? "Don't have favorites"
      : favs.map((item) => <Card key={item.id} item={item} />);

  return (
    <>
      <h1 className="py-4">Dentists Favs</h1>
      <p className="text-center pb-4">
        <button
          onClick={() => {
            dispatch({ type: "CLEAN-FAVS" });
          }}
          className="btn btn-lg btn-danger"
        >
          Clean favorites
        </button>
      </p>
      <div className="card-grid">{favsHTML}</div>
    </>
  );
};

export default Favs;
