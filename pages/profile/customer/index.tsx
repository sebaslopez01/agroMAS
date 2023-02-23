import Image from "next/image";
import { GetServerSideProps } from "next";

import { getUser } from "@/utils/auth";
import { User } from "@prisma/client";
import pic from "@/public/perfil1.jpg";
import LayoutMarket from "@/components/LayoutMarket";
import CustomerMenu from "@/components/navigation/CustomerMenu";
import CustomerMenu from "@/components/navigation/CustomerMenu";
import NavbarGeneral from "@/components/navigation/NavbarGeneral";

interface CustomerIndexProfileProps {
  user: User | null;
}

export default function CustomerIndexProfile({
  user,
}: CustomerIndexProfileProps) {
  return (
    <LayoutMarket>
      <div className="w-full h-24 md:h-36 lg:h-40 xl:h-40 bg-[#6d9773] rounded-b-xl"></div>
      {user && user.role === "BUYER" ? (
        <>
          <div
            id="glass-bg"
            className="flex flex-col lg:flex-row items-center justify-center rounded-xl h-72 lg:h-60 w-[80%] md:w-[70%] lg:w-[50%] mx-auto -mt-20 md:-mt-28 xl:-mt-32 p-5 "
          >
            <Image
              src={pic}
              alt="profile pic"
              className="rounded-full w-[30%] md:w-[25%] lg:w-[25%] my-auto"
            />
            <div className="flex flex-col justify-center text-center lg:text-left p-5">
              <span className="text-gray-500">Hola,</span>
              <span className="text-3xl font-semibold text-gray-700">
                Cualquier nombre
              </span>
              <span className="text-gray-500">
                Estás registrado como: <b>Cliente</b>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center mx-auto mt-10">
            <CustomerMenu userName={`${user.firstName} ${user.lastName}`} />
          </div>
        </>
      ) : (
        <span>
          Por favor inicia sesión como comprador para acceder al dashboard
        </span>
      )}
    </LayoutMarket>
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
