import OrderItem from "./OrderItem";
import { Product } from "@/app/order/page";

type Props = {
  products: Product[];
  updateQuantity: (id: number, delta: number) => void;
};

export default function OrderList({ products, updateQuantity }: Props) {
  return (
    <section className="space-y-4">
      {products.map((item) => (
        <OrderItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onChangeQty={(delta) => updateQuantity(item.id, delta)}
        />
      ))}
    </section>
  );
}
