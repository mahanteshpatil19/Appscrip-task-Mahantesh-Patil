import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

import productsData from "../data/products"; 

const sortedProducts = [...products].sort((a, b) => {
  if (sortBy === "price-low") return a.price - b.price;
  if (sortBy === "price-high") return b.price - a.price;
  return 0; 
});

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

    
<div className="plp-toolbar desktop-toolbar">
  <span className="item-count">3425 ITEMS</span>

  <button
    className="filter-toggle"
    onClick={() => setShowFilter(!showFilter)}
  >
    {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
  </button>

<div className="recommended-wrapper">
  <button
    className="recommended-btn"
    onClick={() => setOpenSort(!openSort)}
  >
    RECOMMENDED ▾
  </button>

  {openSort && (
    <ul className="sort-dropdown">
      <li onClick={() => { setSortBy("recommended"); setOpenSort(false); }}>
        Recommended
      </li>
      <li onClick={() => { setSortBy("price-low"); setOpenSort(false); }}>
        Price: Low to High
      </li>
      <li onClick={() => { setSortBy("price-high"); setOpenSort(false); }}>
        Price: High to Low
      </li>
    </ul>
  )}
</div>
</div>


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
<ProductGrid products={sortedProducts} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: productsData, 
    },
  };
}

