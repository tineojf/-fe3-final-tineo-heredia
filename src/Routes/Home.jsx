import { useEffect } from "react";
import axios from "axios";
import { useContextGlobal } from "../Components/utils/useContextFunction";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContextGlobal();
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchAPI = async (url) => {
      const res = await axios.get(url);
      const data = await res.data;
      // console.log(data);
      dispatch({ type: "LOAD-DATA", payload: data });
    };

    fetchAPI(url);
  }, [dispatch]);

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
