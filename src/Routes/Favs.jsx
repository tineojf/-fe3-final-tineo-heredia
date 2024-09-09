import { useContextGlobal } from "../Components/utils/useContextFunction";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useContextGlobal();
  const { favs } = state;

  const favsHTML =
    favs.length == 0
      ? "No tienes favoritos"
      : favs.map((item) => <Card key={item.id} item={item} />);

  return (
    <>
      <h1>Dentists Favs</h1>
      <button
        onClick={() => {
          dispatch({ type: "CLEAN-FAVS" });
        }}
      >
        Limpiar favoritos
      </button>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favsHTML}
      </div>
    </>
  );
};

export default Favs;
