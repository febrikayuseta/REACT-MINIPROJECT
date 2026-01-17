'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
  description?: string;
};

type ProductDetailContextType = {
  selectedProduct: Product | null;
  openDetail: (product: Product) => void;
  closeDetail: () => void;
};

const ProductDetailContext = createContext<ProductDetailContextType | undefined>(undefined);

export function ProductDetailProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <ProductDetailContext.Provider value={{ selectedProduct, openDetail, closeDetail }}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export function useProductDetail() {
  const context = useContext(ProductDetailContext);
  if (!context) {
    throw new Error('useProductDetail harus digunakan dalam ProductDetailProvider');
  }
  return context;
}
