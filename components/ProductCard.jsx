export default function ProductCard({ product }) {
  return (
    <article className="productCard">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>₹ {product.price}</p>
      <span className="wishlist">♡</span>
    </article>
  );
}
