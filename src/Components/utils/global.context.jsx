import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reduceFile";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = (propiedades) => {
  const { children } = propiedades;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
