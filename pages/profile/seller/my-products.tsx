import Meta from "@/components/Meta";
import Link from "next/link";
import SellerProduct from "@/components/cards/SellerProduct";
import Layout from "@/components/Layout";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";

export default function SellerProducts() {
  return (
    <>
      <Meta />
      <NavBarMarket />
      <div className="w-[90%] mx-auto pt-12">
          <h1 className="text-md lg:text-2xl font-semibold">Mis productos</h1>
      </div>

      <button className="fixed right-0 bottom-0 z-50 h-16 lg:h-20 w-16 lg:w-20 m-7 lg:m-10 rounded-full flex items-center justify-center bg-green-900 hover:scale-125 duration-300 hover:bg-green-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-plus w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 5l0 14"></path>
          <path d="M5 12l14 0"></path>
        </svg>
      </button>

      <div className="w-[90%] mx-auto pt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-items-center">
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
      </div>
      <Footer />
    </>
  );
}
