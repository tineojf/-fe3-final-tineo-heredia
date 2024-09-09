import { useContext } from "react";
import { ContextGlobal } from "./global.context";

export const useContextGlobal = () => useContext(ContextGlobal);
