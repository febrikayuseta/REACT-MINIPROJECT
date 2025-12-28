type Props = {
  name: string;
  price: number;
  quantity: number;
  onChangeQty: (delta: number) => void;
};

export default function OrderItem({ name, price, quantity, onChangeQty }: Props) {
  const total = price * quantity;

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      {/* ROW 1 */}
      <div className="flex justify-between items-center">
        <p className="font-medium">{name}</p>
        <div className="flex items-center gap-3">
          <button
            className="w-8 h-8 border rounded"
            onClick={() => onChangeQty(-1)}
          >
            −
          </button>
          <span className="w-4 text-center">{quantity}</span>
          <button
            className="w-8 h-8 border rounded"
            onClick={() => onChangeQty(1)}
          >
            +
          </button>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="flex justify-between text-sm text-gray-500">
        <p>Rp {price.toLocaleString("id-ID")}</p>
        <p className="font-medium text-black">Rp {total.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}

