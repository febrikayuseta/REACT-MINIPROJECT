'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

type ProductProps = {
  id: string;
  image: string;
  name: string;
  price: number;
};

function ProductCard({ id, image, name, price }: ProductProps) {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAdd = () => {
    addToCart(id, name, price, image);
    addToast(`✓ ${name} telah ditambahkan ke keranjang`, 'success');
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl">
        <img 
          src={image} 
          alt={name} 
          className="product-img group-hover:scale-110 transition-transform duration-300"
        />
        <button 
          onClick={handleAdd} 
          className="btn-add bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
        >
          +
        </button>
      </div>
      <p className="product-title text-lg mt-3">{name}</p>
      <p className="product-price font-semibold text-base text-pink-700">Rp.{price.toLocaleString('id-ID')}</p>
    </div>
  );
}

export default ProductCard;