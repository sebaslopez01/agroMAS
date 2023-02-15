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
      <div className="grid grid-cols-3 w-full z-50 p-3">
        <Link
          href="/profile/seller"
          className="w-[100%] h-[100%] flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left col-start-1 ml-3 w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]"
            // width="48"
            // height="48"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </Link>

        <div className="m-auto col-start-2">
          <h1 className="text-md lg:text-2xl font-semibold">Mis productos</h1>
        </div>
      </div>

      <div className="flex justify-evenly w-[100%] pt-5 flex-wrap p-5">
        <button className="h-72 md:h-96 lg:w-[23%] m-1 grid grid-cols-4 grid-rows-6 items-end border border-gray-300 rounded-xl hover:bg-gray-100 min-w-fit ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-square-rounded-plus col-start-2 col-span-2 row-start-2 row-span-2 mx-auto"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#cccccc"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 12h6"></path>
            <path d="M12 9v6"></path>
            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
          </svg>
          <span className="col-start-1 col-span-4 row-start-4 mx-auto text-md lg:text-lg text-center text-gray-400">
            Agregar nuevo producto
          </span>
        </button>

        <SellerProduct />
        <SellerProduct />
      </div>
      <Footer />
    </>
  );
}
