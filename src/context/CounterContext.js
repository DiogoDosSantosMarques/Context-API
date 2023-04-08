// 1 - criar contexto

// Tudo se passa por aqui nesse CounterCotext que terá que importar em outros componentes ou páginas
import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - criar provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};