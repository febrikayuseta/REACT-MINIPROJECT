import React from "react";
import Header from "../components/Header";
import OrderList from "../components/OrderList";
import OrderSummary from "../components/OrderSummary";
import PaymentMethod from "../components/PaymentMethod";

function OrderPage() {
  return (
    <main className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      <div className="mt-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Keranjang Belanja</h2>
        <OrderList />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        <div className="md:col-span-2">
          {/* OrderList content is above */}
        </div>
        <div className="space-y-4">
          <OrderSummary />
          <PaymentMethod />
        </div>
      </div>
    </main>
  );
}

export default OrderPage;
