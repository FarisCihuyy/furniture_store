import { useState, useEffect } from "react";
import Products from "./../assets/data";
import { Icon } from "@iconify/react/dist/iconify.js";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Card from "../components/Card";
import Heading from "../components/Heading";

function Home() {
  const [shuffledData, setShuffledData] = useState([]); // Data yang diacak
  const [discountedProducts, setDiscountedProducts] = useState([]); // Produk dengan diskon
  const [visibleCount, setVisibleCount] = useState(8); // Jumlah item yang ditampilkan
  const [promoVisibleCount, setPromoVisibleCount] = useState(4); // Jumlah produk promo yang ditampilkan

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() })) // Tambahkan nilai random
      .sort((a, b) => a.sort - b.sort) // Urutkan berdasarkan nilai random
      .map(({ value }) => value); // Kembalikan array yang sudah diacak
  };

  // Acak data saat komponen pertama kali dimuat
  useEffect(() => {
    setShuffledData(shuffleArray(Products));

    // Filter produk dengan diskon
    const discounted = Products.filter((product) => product.discountPrice !== null);
    setDiscountedProducts(discounted);
  }, []);

  // Fungsi untuk menambah jumlah item yang ditampilkan
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  // Fungsi untuk menambah jumlah produk promo yang ditampilkan
  const handleLoadMorePromos = () => {
    setPromoVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <Hero />
      <Categories>
        <Heading title={"Daftar Produk"} />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {shuffledData.slice(0, visibleCount).map((product) => (
            <Card {...product} key={product.id} />
          ))}
        </div>
        {visibleCount < shuffledData.length && (
          <section className="flex items-center justify-center text-sky-600 mx-10 my-8 pb-8 border-b-[1.5px] border-gray-200">
            <p className="text-sm font-light cursor-pointer" onClick={handleLoadMore}>
              Lihat Selengkapnya
            </p>
            <Icon icon="formkit:down" className="text-[8px]" />
          </section>
        )}

        <Heading title={"Promosi Minggu Ini"} />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {discountedProducts.slice(0, promoVisibleCount).map((product) => (
            <Card {...product} key={product.id} />
          ))}
        </div>
        {promoVisibleCount < discountedProducts.length && (
          <section className="flex items-center justify-center text-sky-600 mx-10 my-8 pb-8 border-b-[1.5px] border-gray-200">
            <p className="text-sm font-light cursor-pointer" onClick={handleLoadMorePromos}>
              Lihat Selengkapnya
            </p>
            <Icon icon="formkit:down" className="text-[8px]" />
          </section>
        )}
      </Categories>
    </>
  );
}

export default Home;
