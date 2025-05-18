import { createContext, useCallback, useContext, useState } from "react";

import properties from "../data/properties";

// create context
const PropertiesContext = createContext();

// context provider
export const PropertiesProvidor = ({ children }) => {
  const [allProperties] = useState(properties);

  return (
    <PropertiesContext.Provider value={{ allProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};

// custom hook for accessing context
export const useProperties = () => useContext(PropertiesContext);
