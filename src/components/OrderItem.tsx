type Props = {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  onChangeQty: (quantity: number) => void;
  onRemove: () => void;
};

export default function OrderItem({ id, image, name, price, quantity, onChangeQty, onRemove }: Props) {
  const total = price * quantity;

  const handleMinus = () => {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) {
      onRemove();
    } else {
      onChangeQty(newQuantity);
    }
  };

  const handlePlus = () => {
    onChangeQty(quantity + 1);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex gap-4">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-lg object-cover"
        />

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-600">Rp {price.toLocaleString("id-ID")}</p>
            </div>
            <button
              onClick={onRemove}
              className="text-red-600 hover:text-red-700 text-sm font-semibold"
            >
              ✕
            </button>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-3 mt-3">
            <button
              className="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100 transition"
              onClick={handleMinus}
            >
              −
            </button>
            <span className="w-6 text-center font-semibold">{quantity}</span>
            <button
              className="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100 transition"
              onClick={handlePlus}
            >
              +
            </button>
            <span className="ml-auto font-semibold text-gray-800">
              Rp {total.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

