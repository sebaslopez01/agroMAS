import Image, { StaticImageData } from "next/image";
import { useState, useContext } from "react";
import fruta1 from "@/public/frura1.jpg";

import { Store } from "@/context/Store";
import { StoreActionKind } from "@/lib/enums";

interface ItemMarketProps {
  productId: string;
  productName: string;
  seller: string;
  productPrice: number;
  undPerItem: string;
  productCity: string;
  productState: string;
  productImage?: StaticImageData;
}

export default function ItemMarket({
  productId,
  productName,
  seller,
  productPrice,
  undPerItem,
  productCity,
  productState,
  productImage,
}: ItemMarketProps) {
  const { state, dispatch } = useContext(Store);
  const [count, setCount] = useState(
    state.cart.find((item) => item.id === productId)?.quantity || 0
  );

  const addToCartHandler = (quantity: number) => {
    dispatch({
      type: StoreActionKind.CART_ADD_ITEM,
      payload: { id: productId, quantity },
    });
  };

  return (
    <>
      <div
        id="glass-bg"
        className="flex flex-col justify-between w-[80%] h-[95%] lg:w-[100%] lg:h-[100%] p-3 rounded-xl"
      >
        <div className="flex h-[55%] w-full rounded-xl">
          <Image
            className="rounded-2xl w-[100%] h-[100%] object-cover"
            src={fruta1}
            alt="Perita"
          />
        </div>
        <div className="h-[40%] w-full flex flex-col justify-between">
          <div className="flex justify-between items-end">
            <span className="text-xl font-semibold text-gray-700">
              {nameProduct}
            </span>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg>
            <span className="text-sm ml-1">
              {productCity}, {productState}
            </span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            <p className=" text-sm ml-1">{seller}</p>
          </div>

          <div className="flex justify-between items-center w-[100%]">
            <div className="flex">
              {/* Price */}
              <span className="text-2xl mr-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-emerald-600">
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
          </div>
            <div className="flex flex-col w-2/5">
              {/* Counter Buttons */}
              <div className="flex h-6 justify-between items-center">
                <button
                  onClick={() => {
                    if (count >= 1) setCount((c) => c - 1);
                  }}
                  className="flex items-center justify-center h-full w-[33%] border border-green-700 hover:bg-green-800 hover:border-green-800 hover:text-white rounded-l-md text-gray-700 text-xl font-medoim"
                >
                  -
                </button>
                <input
                  onChange={(e) => {
                    const val = +e.target.value;
                    if (!isNaN(val)) setCount(val);
                  }}
                  className="flex items-center justify-center h-full w-[33%] bg-inherit text-lg text-center focus:outline-none"
                  value={count}
                  maxLength={2}
                />
                <button
                  onClick={() => setCount((c) => c + 1)}
                  className="flex items-center justify-center h-full w-[33%] border border-green-700 text-gray-700  hover:bg-green-800 hover:border-green-800 hover:text-white rounded-r-md text-xl font-medium"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add Cart Button */}
            <button
              title="Agregar al carrito"
              className="flex h-8 bg-secondary rounded-xl items-center justify-center mb-1"
              onClick={() => addToCartHandler(count)}
            >
              <p className="text-white font-medium">Agregar</p>
            </button>
          </div>
          <div className="w-full">
            {/* Add Cart Button */}
            <button
              title="Agregar al carrito"
              className="flex w-full p-1 bg-green-800 rounded-md items-center justify-center hover:scale-110 duration-300"
            >
              <p className="text-white font-medium text-sm">Agregar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
