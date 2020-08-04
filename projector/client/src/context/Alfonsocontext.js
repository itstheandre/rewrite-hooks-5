import React, { createContext, useState, useContext } from "react";

export const Alfonso = createContext();

const Provider = Alfonso.Provider;

export function AlfonsoProvider({ children }) {
  const banana = "How was your birthday?";
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <Provider value={{ banana, count, increment }}>{children}</Provider>;
}

export const useAlfonso = useContext(Alfonso);
