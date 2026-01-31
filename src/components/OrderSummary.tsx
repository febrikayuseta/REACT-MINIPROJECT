'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

interface OrderSummaryProps {
  subtotal?: number;
}

export default function OrderSummary({ subtotal: propsSubtotal }: OrderSummaryProps) {
  const { getTotalPrice, getTotalItems } = useCart();

  const subtotal = propsSubtotal !== undefined ? propsSubtotal : getTotalPrice();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <section className="bg-white p-4 rounded-lg shadow text-sm space-y-2">
      <div className="flex justify-between">
        <span>Subtotal ({getTotalItems()} items)</span>
        <span>Rp {subtotal.toLocaleString("id-ID")}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax (10%)</span>
        <span>Rp {tax.toLocaleString("id-ID")}</span>
      </div>
      <div className="flex justify-between font-bold text-pink-600 text-lg">
        <span>Total</span>
        <span>Rp {total.toLocaleString("id-ID")}</span>
      </div>
    </section>
  );
}
