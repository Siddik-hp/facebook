import { createContext, useContext } from "react";
const AppContex = createContext();
import React, { useState } from "react";

export const AppWrapper = ({ children }) => {
  const [SliderShow, setSliderShow] = useState(false);
  return (
    <AppContex.Provider value={[SliderShow, setSliderShow]}>
      {children}
    </AppContex.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContex);
};
