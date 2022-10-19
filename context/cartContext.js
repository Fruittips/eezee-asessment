import { useState, createContext, useContext } from "react";

const cartQuantityContext = createContext();

export function CartWrapper({ children }) {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <cartQuantityContext.Provider value={[cartQuantity, setCartQuantity]}>
      {children}
    </cartQuantityContext.Provider>
  );
}

export function useCartQuantityContext() {
  return useContext(cartQuantityContext);
}
