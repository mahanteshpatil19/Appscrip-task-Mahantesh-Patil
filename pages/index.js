import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Home({ products }) {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <>
      <Head>
        <title>Discover Our Products | Appscrip Task</title>
        <meta
          name="description"
          content="Explore premium handcrafted products curated for modern lifestyles."
        />
      </Head>

      <Header />
      <Hero />

      {/* TOP BAR ABOVE GRID */}
      {/* DESKTOP TOOLBAR */}
<div className="plp-toolbar desktop-toolbar">
  <span className="item-count">3425 ITEMS</span>

  <button
    className="filter-toggle"
    onClick={() => setShowFilter(!showFilter)}
  >
    {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
  </button>

  <span className="recommended">RECOMMENDED ▾</span>
</div>

{/* MOBILE TOOLBAR */}
<div className="plp-toolbar mobile-toolbar">
  <span className="filter-btn">FILTER</span>
  <span className="recommended">RECOMMENDED ▾</span>
</div>


      <main className={`container ${!showFilter ? "no-filter" : ""}`}>
        {showFilter && (
          <aside className="filters">
            <Filters />
          </aside>
        )}

        <section className="products">
          <ProductGrid products={products} />
        </section>
      </main>

      <Footer />
    </>
  );
}
export async function getStaticProps() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("API failed");
    }

    products = await res.json();
  } catch (error) {
    console.error("Using fallback product data", error);

    // fallback mock data (important for Netlify build)
    products = [
      {
        id: 1,
        title: "Recycled Backpack",
        price: 109.95,
        image: "/products/bag1.jpg",
      },
      {
        id: 2,
        title: "Premium Cotton T-Shirt",
        price: 22.3,
        image: "/products/shirt1.jpg",
      },
    ];
  }

  return {
    props: { products },
  };
}


