import { createContext, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

export const ProductContext = createContext({});

export function ProductsContextProvider({children}) {
  const [selectedProducts, setSelectedProducts] = useLocalStorageState('cart', { defaultValue: [] });
  return (
    <ProductContext.Provider value={{ selectedProducts,setSelectedProducts }}>
      {children}
      </ProductContext.Provider>
  )
}