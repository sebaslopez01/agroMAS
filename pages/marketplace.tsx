import { GetServerSideProps } from "next";
import { Product } from "@prisma/client";

import { capitalizeString } from "@/utils/helpers";
import prisma from "@/lib/prisma";
import ItemMarket from "@/components/cards/ItemMarket";
import Filters from "@/components/marketplace/Filters";
import LayoutMarket from "@/components/LayoutMarket";
import { getUser } from "@/utils/auth";
import { FullUser } from "@/lib/types";

interface MarketplaceProps {
  user: FullUser;
  products: (Product & {
    seller: {
      user: {
        firstName: string;
        lastName: string;
      };
    };
  })[];
}

export default function Marketplace({ user, products }: MarketplaceProps) {
  return (
    <LayoutMarket user={user}>
      <div className="flex flex-col lg:w-[90%] lg:m-auto">
        <div className="flex justify-center w-full mt-7 mb-5">
          <span className="text-2xl font-semibold text-gray-700"></span>
        </div>
        <Filters />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 lg:gap-8 justify-items-center w-[90%] mx-auto">
          {products.length > 0 ? (
            products.map((product) => (
              <ItemMarket
                key={product.id}
                productId={product.id}
                productName={capitalizeString(product.name)}
                seller={`${product.seller.user.firstName} ${product.seller.user.lastName}`}
                productQuantity={product.quantity}
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
    </LayoutMarket>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const user = await getUser(req, res);

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
        user,
        products,
      },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      user,
      products: [],
    },
  };
};
