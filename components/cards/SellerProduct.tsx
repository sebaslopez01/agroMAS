import axios from "axios";
import Image from "next/image";

import { capitalizeString } from "@/utils/helpers";
import { Product } from "@prisma/client";
import ModalUpdateProduct from "../modals/ModalUpdateProduct";
import { FullUser } from "@/lib/types";

interface SellerProductProps {
  product: Product;
  getProducts: () => Promise<void>;
  user: FullUser;
}

export default function SellerProduct({
  product,
  getProducts,
  user,
}: SellerProductProps) {
  const deleteProduct = async (productId: string) => {
    const res = await axios.post("/api/dashboard/delete-product", {
      id: productId,
    });

    if (res.status !== 200) {
      console.log(res.data.message);
      return;
    }

    getProducts();
  };

  return (
    <div
      id="glass-bg"
      className="flex flex-col h-fit w-[80%] space-y-3 rounded-xl p-3"
    >
      <img
        src="/frura1.jpg"
        className=" w-[80%] mx-auto object-cover rounded-xl"
        alt=""
      />

      <div className="flex flex-col items-center">
        <span className="text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-emerald-600">
          {capitalizeString(product.name)}
        </span>
        <span className="text-xs text-gray-500">
          Publicado el {new Date(product.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="flex flex-col items-center m-1">
        <span className="font-medium text-md lg:text-xl">
          {product.quantitySold}
        </span>
        <span className="text-xs text-gray-500">Vendidos</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-medium text-md lg:text-xl">
          $ {product.price}
        </span>
        <span className="text-xs text-gray-500">Precio por Kg</span>
      </div>
      <div className="flex justify-center items-center w-full space-x-2">
        <button
          onClick={() => deleteProduct(product.id)}
          className="border rounded-lg border-gray-400 text-xs lg:text-sm hover:bg-gray-400 hover:text-white p-2 w-[50%]"
        >
          Eliminar
        </button>
        <ModalUpdateProduct
          getProducts={getProducts}
          product={product}
          user={user}
        />
      </div>
    </div>
  );
}
