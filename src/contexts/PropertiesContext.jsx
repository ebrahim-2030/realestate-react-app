import { createContext, useCallback, useContext, useState } from "react";

import properties from "../data/properties";

// create context
const PropertiesContext = createContext();

// context provider
export const PropertiesProvidor = ({ children }) => {
  const [allProperties] = useState(properties);

  // filter logic
  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const applyFilters = ({ listingType, propertyType, discountedOnly }) => {
    let filtered = allProperties;

    if (listingType && listingType !== "all") {
      filtered = filtered.filter((p) => p.listingType === listingType);
    }

    if (propertyType && propertyType !== "all") {
      filtered = filtered.filter((p) => p.propertyType === propertyType);
    }

    if (discountedOnly) {
      filtered = filtered.filter((p) => p.discount?.isDiscounted);
    }

    setFilteredProperties(filtered);
  };
  return (
    // provide state and filter function to children
    <PropertiesContext.Provider
      value={{ allProperties, filteredProperties, applyFilters }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

// custom hook for accessing context
export const useProperties = () => useContext(PropertiesContext);
