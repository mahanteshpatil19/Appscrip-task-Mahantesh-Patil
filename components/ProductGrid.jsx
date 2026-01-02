import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="productGrid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
