type Props = {
  subtotal?: number;
};

function OrderSummary({ subtotal = 0 }: Props) {
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <section className="bg-white p-4 rounded-lg shadow text-sm space-y-2">
      <div className="flex justify-between">
        <span>Subtotal</span>
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

export default OrderSummary;
