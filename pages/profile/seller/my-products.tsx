import { GetServerSideProps } from "next";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { Product } from "@prisma/client";
import { getUser } from "@/utils/auth";
import { FullUser } from "@/lib/types";
import SellerProduct from "@/components/cards/SellerProduct";
import ModalAddProduct from "@/components/modals/ModalAddProduct";
import LayoutGeneral from "@/components/LayoutGeneral";

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
  };

  useEffect(() => {
    if (prodsRef.current) getProducts();

    return () => {
      prodsRef.current = false;
    };
  }, []);

  return (
    <LayoutGeneral user={user} pageName="Mis productos">
      {user && user.role === "SELLER" ? (
        <div>
          <div className="w-[90%] mx-auto pt-12">
            <h1 className="text-md lg:text-2xl font-semibold">Mis productos</h1>
          </div>
          <ModalAddProduct getProducts={getProducts} user={user} />
          <div className="w-[90%] mx-auto pt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-items-center">
            {prods?.map((product) => (
              <SellerProduct
                key={product.id}
                product={product}
                getProducts={getProducts}
                user={user}
              />
            ))}
          </div>
        </div>
      ) : (
        <span>
          Por favor inicia sesión como vendedor para acceder al dashboard
        </span>
      )}
    </LayoutGeneral>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

  return {
    props: {
      user,
    },
  };
};
