import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import pera from "@/public/pera.jpg";

interface ItemMarketProps {
  nameProduct: string;
  priceProduct: number;
  productLocation: string;
  productImage?: StaticImageData;
}

export default function ItemMarket({
  nameProduct,
  priceProduct,
  productLocation,
  productImage,
}: ItemMarketProps) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col h-[26rem] w-96 m-5 relative">
        {/* Product image */}
        <div className="flex h-[85%] w-full rounded-2xl relative">
          <Image className="rounded-2xl" src={pera} alt="Perita" fill />
        </div>

        {/* Product description */}
        <div
          id="card"
          className="flex h-contain w-[95%] rounded-xl flex-col absolute bottom-0 left-[50%] translate-x-[-50%]"
        >
          <span className="mt-2 px-3 text-4xl font-medium blur-none">
            {nameProduct}
          </span>

          {/* Location */}
          <div className="flex flex-row items-center mt-3">
            <Image
              className="mr-2 ml-3"
              src="/location.png"
              alt="location-icon"
              width={20}
              height={20}
            />
            <span className="">{productLocation}</span>
          </div>

          <div className="flex flex-row px-2 my-5 justify-center items-center">
            {/* Price */}
            <div className="h-10 w-2/5 p-1">
              <span className="text-2xl">${priceProduct} Kg</span>
            </div>

            {/* Counter Buttons */}
            <div className="flex h-10 w-2/5 justify-evenly items-center mr-2">
              <button
                onClick={() => {
                  if (count >= 1) setCount((c) => c - 1);
                }}
                className="flex items-center justify-center h-10 w-[33%] bg-red-400  rounded-l-xl text-white text-4xl"
              >
                -
              </button>
              <input
                onChange={(e) => {
                  const val = +e.target.value;
                  if (!isNaN(val)) setCount(val);
                }}
                className="flex items-center justify-center h-10 w-[33%] bg-inherit text-2xl text-center focus:outline-none"
                value={count}
                maxLength={2}
              />
              <button
                onClick={() => setCount((c) => c + 1)}
                className="flex items-center justify-center h-10 w-[33%] bg-red-400 rounded-r-xl text-white text-4xl"
              >
                +
              </button>
            </div>

            {/* Cart Button */}
            <button className="flex h-10 w-1/5 bg-red-400 rounded-xl items-center">
              <img className="scale-50" src="addtocart.png" alt="add-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
