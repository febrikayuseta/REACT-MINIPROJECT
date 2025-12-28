"use client";

import { useState } from "react";

export default function PaymentMethod() {
  const [selected, setSelected] = useState("cash");

  return (
    <section className="mt-6">
      <h3 className="font-semibold mb-2 text-lg">Payment Method</h3>

      <div className="space-y-3">
        {/* CASH */}
        <label
          className={`flex justify-between p-4 border rounded-xl cursor-pointer
          ${selected === "cash" ? "border-pink-500 bg-pink-50" : "hover:bg-gray-50"}`}
        >
          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-pink-500"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="1" y="5" width="30" height="22" rx="2" />
              <ellipse cx="16" cy="16" rx="4" ry="5" />
            </svg>
            <span className="text-lg">Cash</span>
          </div>

          <input
            type="radio"
            checked={selected === "cash"}
            onChange={() => setSelected("cash")}
          />
        </label>

        {/* QRIS */}
        <label
          className={`flex justify-between p-4 border rounded-xl cursor-pointer
          ${selected === "qris" ? "border-pink-500 bg-pink-50" : "hover:bg-gray-50"}`}
        >
          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-pink-500"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M3 3H0V14H16V3H13L11 1H5L3 3ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            <span className="text-lg">QRIS</span>
          </div>

          <input
            type="radio"
            checked={selected === "qris"}
            onChange={() => setSelected("qris")}
          />
        </label>

        {/* CARD */}
        <label
          className={`flex justify-between p-4 border rounded-xl cursor-pointer
          ${selected === "card" ? "border-pink-500 bg-pink-50" : "hover:bg-gray-50"}`}
        >
          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-pink-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="9" x2="22" y2="9" />
              <line x1="7" y1="14" x2="9" y2="14" />
              <line x1="11" y1="14" x2="13" y2="14" />
            </svg>
            <span className="text-lg">Debit / Credit Card</span>
          </div>

          <input
            type="radio"
            checked={selected === "card"}
            onChange={() => setSelected("card")}
          />
        </label>
      </div>
    </section>
  );
}
