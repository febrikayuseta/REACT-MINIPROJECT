interface OrderItemDisplayProps {
  name: string;
  price: number;
  image: string;
}

interface OrderItemQuantityProps {
  quantity: number;
  total: number;
  onPlus: () => void;
  onMinus: () => void;
}

type Props = {
  item: {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
  };
  actions: {
    onPlus: () => void;
    onMinus: () => void;
    onRemove: () => void;
  };
};

function OrderItemDisplay({ name, price, image }: OrderItemDisplayProps) {
  return (
    <>
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-800 truncate">{name}</p>
        <p className="text-sm text-gray-600">Rp {price.toLocaleString("id-ID")}</p>
      </div>
    </>
  );
}

function OrderItemQuantity({ quantity, total, onPlus, onMinus }: OrderItemQuantityProps) {
  return (
    <div className="flex items-center gap-3 mt-3">
      <button
        className="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100 transition"
        onClick={onMinus}
      >
        −
      </button>
      <span className="w-6 text-center font-semibold">{quantity}</span>
      <button
        className="w-7 h-7 border border-gray-300 rounded hover:bg-gray-100 transition"
        onClick={onPlus}
      >
        +
      </button>
      <span className="ml-auto font-semibold text-gray-800">
        Rp {total.toLocaleString("id-ID")}
      </span>
    </div>
  );
}

export default function OrderItem({ item, actions }: Props) {
  const { name, price, image, quantity } = item;
  const { onPlus, onMinus, onRemove } = actions;
  const total = price * quantity;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex gap-4">
        {/* Display Part */}
        <OrderItemDisplay name={name} price={price} image={image} />

        {/* Action Part */}
        <button
          onClick={onRemove}
          className="text-red-600 hover:text-red-700 text-sm font-semibold self-start"
        >
          X
        </button>
      </div>

      {/* Quantity Part */}
      <OrderItemQuantity
        quantity={quantity}
        total={total}
        onPlus={onPlus}
        onMinus={onMinus}
      />
    </div>
  );
}

