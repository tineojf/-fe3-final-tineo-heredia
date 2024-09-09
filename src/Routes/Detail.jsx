import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    const fetchAPI = async (url) => {
      const res = await axios.get(url);
      const data = await res.data;
      // console.log(data);
      setData(data);
    };

    fetchAPI(url);
  }, [url]);

  const cardHTML =
    Object.keys(data).length === 0 ? (
      "Cargando..."
    ) : (
      <Card item={data} entorno="detail" />
    );

  return (
    <>
      <h1>Detail Dentist </h1>
      {cardHTML}
    </>
  );
};

export default Detail;
