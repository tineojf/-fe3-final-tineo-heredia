import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reduceFile";
import axios from "axios";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = (propiedades) => {
  const { children } = propiedades;

  const [state, dispatch] = useReducer(reducer, initialState);

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

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
