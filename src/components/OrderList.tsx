'use client';

import React from 'react';
import OrderItem from "./OrderItem";
import { useCart } from '../context/CartContext';

export default function OrderList() {
  const { items, updateQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <section className="text-center py-8">
        <p className="text-gray-600 text-lg">Keranjang Anda kosong. Silakan tambahkan produk!</p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      {items.map((item) => (
        <OrderItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onChangeQty={(quantity) => updateQuantity(item.id, quantity)}
          onRemove={() => removeFromCart(item.id)}
        />
      ))}
    </section>
  );
}
