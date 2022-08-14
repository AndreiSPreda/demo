
import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const [path, setPath] = useState("/Cars");

  return (
    <AppContext.Provider value={{ path, setPath }}>
      {children}
    </AppContext.Provider>
  );
}