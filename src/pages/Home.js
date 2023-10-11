import React from "react";
import MainBanner from "../components/MainBanner";
import ServicesSection from "../components/ServiceSection/ServicesSection";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import Marquee from "react-fast-marquee";
import CategoryCard from "../components/CategoriesSection/CategoryCard";
import BlogSection from "../components/BlogSection/BlogSection";
import GallerySection from "../components/GallerySection/GallerySection";
import ProductsSection from "../components/ProductsSection/ProductsSection";

const Home = () => {
  const mainBannerItems = [
    {
      title: "Wedding Accessories",
      description: " All Accessories you need in your big day",
      image: "/images/WeddingAccessories.png",
    },
    {
      title: "Women Shoes",
      description: "Heels, sandals, boots, and more you can find in our store",
      image: "/images/WomenShoes.png",
    },
    {
      title: "Wedding Accessories",
      description: " All Accessories you need in your big day",
      image: "/images/WeddingAccessories.png",
    },
  ];
  return (
    <>
      <MainBanner items={mainBannerItems} />
      <CategoriesSection />
      <ProductsSection />
      <GallerySection />
      <ServicesSection />
      <BlogSection />
    </>
  );
};

export default Home;
