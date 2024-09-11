import { useContextGlobal } from "../Components/utils/useContextFunction";
import Card from "../Components/Card";

const Home = () => {
  const { state } = useContextGlobal();

  const dataHTML =
    state.data.length == 0
      ? "Cargando..."
      : state.data.map((item) => <Card key={item.id} item={item} />);

  return (
    <main className="">
      <h1 className="py-4">Home</h1>
      <div className="card-grid">{dataHTML}</div>
    </main>
  );
};

export default Home;
