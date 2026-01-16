import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CategoryMenu from "../components/CategoryMenu";
import ProductGrid from "../components/ProductGrid";
import BottomNav from "../components/BottomNav";

function HomePage() {
  return (
    <main className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      <Banner />
      <CategoryMenu />
      <ProductGrid />
      <BottomNav />
    </main>
  );
}

export default HomePage;
