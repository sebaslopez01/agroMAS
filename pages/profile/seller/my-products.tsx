import { GetServerSideProps } from "next";
import { Product } from "@prisma/client";

import { getUser } from "@/utils/auth";
import prisma from "@/lib/prisma";
import SellerProduct from "@/components/cards/SellerProduct";
import LayoutMarket from "@/components/LayoutMarket";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FullUser } from "@/lib/types";

interface SellerProductsProps {
  user: FullUser;
}

export default function SellerProducts({ user }: SellerProductsProps) {
  const prodsRef = useRef(true);
  const [prods, setProds] = useState<Product[] | null>(null);

  const getProducts = async () => {
    const res = await axios.post("/api/dashboard/list-products", {
      sellerId: user?.seller?.id,
    });

    setProds(res.data.products);
    console.log("hola");
  };

  useEffect(() => {
    if (prodsRef.current) getProducts();

    return () => {
      prodsRef.current = false;
    };
  }, []);

  return (
    <LayoutMarket>
      {user && user.role === "SELLER" ? (
        <div>
          <div className="w-[90%] mx-auto pt-12">
            <h1 className="text-md lg:text-2xl font-semibold">Mis productos</h1>
          </div>
          <button className="fixed right-0 bottom-0 z-50 h-16 lg:h-20 w-16 lg:w-20 m-7 lg:m-10 rounded-full flex items-center justify-center bg-green-900 hover:scale-125 duration-300 hover:bg-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 5l0 14"></path>
              <path d="M5 12l14 0"></path>
            </svg>
          </button>
          <div className="w-[90%] mx-auto pt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-items-center">
            {prods?.map((product) => (
              <SellerProduct
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                sold={product.quantitySold}
                publishDate={product.createdAt}
                getProducts={getProducts}
              />
            ))}
          </div>
        </div>
      ) : (
        <span>
          Por favor inicia sesión como vendedor para acceder al dashboard
        </span>
      )}
    </LayoutMarket>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

  // if (!user) {
  //   return {
  //     props: {
  //       user: null,
  //       products: null,
  //     },
  //   };
  // }

  // const products = await prisma.product.findMany({
  //   where: {
  //     sellerId: user.seller?.id,
  //   },
  // });

  return {
    props: {
      user,
      // products,
    },
  };
};
