import ProductCard from "./ProductCard";

const products = [
  { image: "/images/menu1.png", name: "Caramel Latte", price: "Rp.42.000" },
  { image: "/images/menu2.png", name: "Butter Croissant", price: "Rp.40.000" },
  { image: "/images/menu3.png", name: "Strawberry Matcha", price: "Rp.50.000" },
  { image: "/images/menu4.png", name: "Iced Americano", price: "Rp.46.000" },
];
function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 pb-28">
      {products.map((item) => (
        <ProductCard
          key={item.name}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}


export default ProductGrid;