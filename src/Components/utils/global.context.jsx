import { createContext } from "react";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = (propiedades) => {
  const { children } = propiedades;

  return <ContextGlobal.Provider value={{}}>{children}</ContextGlobal.Provider>;
};
