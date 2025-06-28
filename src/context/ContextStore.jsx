import { createContext, useContext } from "react";

const ContextStore = createContext();

export const useContextStore = () => useContext(ContextStore);

export const ContextProvider = ContextStore.Provider;
