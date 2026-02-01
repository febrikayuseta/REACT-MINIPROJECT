'use client';

import React from 'react';
import OrderItem from "./OrderItem";
import { useCart } from '../context/CartContext';

interface OrderListProps {
  products?: any[];
  updateQuantity?: (id: any, delta: number) => void;
}

export default function OrderList({ products: propsProducts, updateQuantity: propsUpdateQuantity }: OrderListProps) {
  const { items: contextItems, updateQuantity: contextUpdateQuantity, removeFromCart } = useCart();

  const items = propsProducts || contextItems;

  const handleUpdateQuantity = (id: any, newQuantity: number, currentQuantity: number) => {
    if (propsUpdateQuantity) {
      propsUpdateQuantity(id, newQuantity - currentQuantity);
    } else {
      contextUpdateQuantity(id, newQuantity);
    }
  };

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
          item={{
            id: item.id.toString(),
            image: item.image || "/placeholder-coffee.jpg",
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          }}
          actions={{
            onPlus: () => handleUpdateQuantity(item.id, item.quantity + 1, item.quantity),
            onMinus: () => {
              const newQuantity = item.quantity - 1;
              if (newQuantity <= 0) {
                propsUpdateQuantity ? propsUpdateQuantity(item.id, -item.quantity) : removeFromCart(item.id);
              } else {
                handleUpdateQuantity(item.id, newQuantity, item.quantity);
              }
            },
            onRemove: () => propsUpdateQuantity ? propsUpdateQuantity(item.id, -item.quantity) : removeFromCart(item.id),
          }}
        />
      ))}
    </section>
  );
}
