import ProductCard from "./ProductCard";

const products = [
  { id: "menu1", image: "/images/menu1.png", name: "Caramel Latte", price: 42000 },
  { id: "menu2", image: "/images/menu2.png", name: "Butter Croissant", price: 40000 },
  { id: "menu3", image: "/images/menu3.png", name: "Strawberry Matcha", price: 50000 },
  { id: "menu4", image: "/images/menu4.png", name: "Iced Americano", price: 46000 },
];
function ProductGrid() {
  return (
    <div className="grid grid-cols-4 gap-6 p-8 pb-28 max-w-7xl mx-auto">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}


export default ProductGrid;