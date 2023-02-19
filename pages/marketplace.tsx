import Meta from "@/components/Meta";
import ItemMarket from "@/components/cards/ItemMarket";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";
import { GetServerSideProps } from "next";
import { Product } from "@prisma/client";
import { useState } from "react";
import { capitalizeString } from "@/utils/helpers";
import prisma from "@/lib/prisma";
import Filters from "@/components/marketplace/Filters";

interface MarketplaceProps {
  products: (Product & {
    seller: {
      user: {
        firstName: string;
        lastName: string;
      };
    };
  })[];
}

export default function Marketplace({ products }: MarketplaceProps) {
  const [prods, setProds] = useState(products);

  return (
    <>
      <Meta />
      <NavBarMarket />
      <div className="bg-gray-200">
        <div className="flex flex-col lg:w-[80%] lg:m-auto py-10">
          <div className="flex justify-center w-full mt-7 mb-5">
            <span className="text-2xl font-semibold text-gray-700">
              Resultados de búsqueda...
            </span>
          </div>
          <Filters />
          <div className="flex flex-wrap justify-center w-full">
            {prods.length > 0 ? (
              prods.map((product) => (
                <ItemMarket
                  key={product.id}
                  productId={product.id}
                  productName={capitalizeString(product.name)}
                  seller={`${product.seller.user.firstName} ${product.seller.user.lastName}`}
                  productPrice={product.price}
                  undPerItem="Kg"
                  productCity={product.city}
                  productState={product.state}
                />
              ))
            ) : (
              <span>No se encontraron productos, prueba con otra busqueda</span>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const productsName = (query["name"] as string) || undefined;
    const productsState = (query["state"] as string) || undefined;
    const productsCity = (query["city"] as string) || undefined;

    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: productsName,
        },
        state: productsState,
        city: productsCity,
      },
      include: {
        seller: {
          select: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    return {
      props: {
        products,
      },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      products: [],
    },
  };
};
