import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import fruta1 from "@/public/frura1.jpg";

interface ItemMarketProps {
  nameProduct: string;
  seller: string;
  priceProduct: number;
  undPerItem: string;
  productCity: string;
  productState: string;
  productImage?: StaticImageData;
}

export default function ItemMarket({
  nameProduct,
  seller,
  priceProduct,
  undPerItem,
  productCity,
  productState,
  productImage,
}: ItemMarketProps) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col h-[30rem] w-96 m-5 relative">
        {/* Product image */}
        <div className="flex h-[70%] w-full rounded-2xl relative">
          <Image className="rounded-2xl" src={fruta1} alt="Perita" fill />
        </div>

        {/* Product description */}
        <div
          id="glass-bg"
          className="flex h-contain w-[95%] rounded-xl flex-col absolute bottom-0 left-[50%] translate-x-[-50%] px-3"
        >
          <div className="flex justify-between items-end">
            <span className="mt-2 text-3xl font-semibold text-gray-700">
              {nameProduct}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg>
            <span className=" ml-1">
              {productCity}, {productState}
            </span>
          </div>

          {/* seller section */}
          <div className="flex items-center my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            <p className="ml-1">{seller}</p>
          </div>

          {/* add and price section */}
          <div className="flex justify-between w-[100%] mb-1">
            <div className="my-1 flex items-center">
              {/* Price */}
              <span className="text-4xl mr-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-emerald-600">
                $ {priceProduct}
              </span>

              {/* Unidad de venta */}
              <div
                title="Cantidad unitaria"
                className="flex h-8 items-center justify-center"
              >
                <p className=" text-gray-700 text-xl font-medium">
                  {undPerItem}
                </p>
              </div>
            </div>

            <div className="flex flex-col w-2/5">
              {/* Counter Buttons */}
              <div className="flex h-8 justify-evenly items-center mb-1">
                <button
                  onClick={() => {
                    if (count >= 1) setCount((c) => c - 1);
                  }}
                  className="flex items-center justify-center h-8 w-[33%] border border-secondary hover:bg-secondary hover:text-white rounded-l-xl text-gray-700 text-3xl font-medoim"
                >
                  -
                </button>
                <input
                  onChange={(e) => {
                    const val = +e.target.value;
                    if (!isNaN(val)) setCount(val);
                  }}
                  className="flex items-center justify-center h-8 w-[33%] bg-inherit text-xl text-center focus:outline-none"
                  value={count}
                  maxLength={2}
                />
                <button
                  onClick={() => setCount((c) => c + 1)}
                  className="flex items-center justify-center h-8 w-[33%] border border-secondary text-gray-700  hover:bg-secondary hover:text-white rounded-r-xl text-3xl font-medium"
                >
                  +
                </button>
              </div>

              {/* Add Cart Button */}
              <button
                title="Agregar al carrito"
                className="flex h-8 bg-secondary rounded-xl items-center justify-center mb-1"
              >
                <p className="text-white font-medium">Agregar</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
