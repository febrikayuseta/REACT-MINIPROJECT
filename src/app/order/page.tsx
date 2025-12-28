"use client";
import { useState } from "react";
import Link from "next/link";
import OrderList from "@/components/OrderList";
import OrderSummary from "@/components/OrderSummary";
import PaymentMethod from "@/components/PaymentMethod";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function OrderPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Caramel Latte", price: 42000, quantity: 2 },
    { id: 2, name: "Butter Croissant", price: 42000, quantity: 2 },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(p.quantity + delta, 0) } : p
      )
    );
  };

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const total = subtotal * 1.1; // subtotal + 10% tax

  return (
    <main className="bg-gray-100 font-sans min-h-screen">
      <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 space-y-6">

        {/* HEADER */}
        <section className="flex items-center my-5">
          <Link href="/" className="mr-3 text-xl md:text-2xl">
            <svg
              className="w-6 h-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                fill="currentColor"
              />
            </svg>
          </Link>

          <h2 className="flex-1 text-xl md:text-2xl font-semibold">
            Order & Payment
          </h2>
        </section>

        {/* CONTENT */}
 <section className="p-6 max-w-xl mx-auto space-y-6 mb-20">
  <OrderList products={products} updateQuantity={updateQuantity} />
  <OrderSummary subtotal={subtotal} />
  <PaymentMethod />
</section>

<section className="mt-6 w-full">
  <a
    href="/payment-success"
    style={{ backgroundColor: "var(--color-primary)" }}
    className="flex justify-center items-center w-full text-white no-underline py-3 md:py-4 rounded-xl font-semibold text-lg md:text-xl shadow-lg hover:brightness-90 transition"
  >
    Pay Rp {total.toLocaleString("id-ID")}
  </a>
</section>
      </div>
    </main>
  );
}
