type ProductProps = {
  image: string;
  name: string;
  price: string;
};

function ProductCard({ image, name, price }: ProductProps) {
  const handleAdd = () => alert(`${name} ditambahkan ke cart!`);

  return (
    <div>
      <div className="relative">
        <img src={image} alt={name} className="product-img" />
        <button onClick={handleAdd} className="btn-add bg-primary">
          +
        </button>
      </div>
      <p className="product-title">{name}</p>
      <p className="product-price">{price}</p>
    </div>
  );
}

export default ProductCard;