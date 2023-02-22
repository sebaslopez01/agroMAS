import { GetServerSideProps } from "next";

import { getUser } from "@/utils/auth";
import { User } from "@prisma/client";
import LayoutMarket from "@/components/LayoutMarket";
import SellerMenu from "@/components/navigation/SellerMenu";

interface SellerIndexProfileProps {
  user: User | null;
}

export default function SellerIndexProfile({ user }: SellerIndexProfileProps) {
  return (
    <LayoutMarket>
      <div className="flex justify-center items-center mx-auto mt-10">
        {user && user.role === "SELLER" ? (
          <SellerMenu userName={`${user.firstName} ${user.lastName}`} />
        ) : (
          <span>
            Por favor inicia sesión como vendedor para acceder al dashboard
          </span>
        )}
      </div>
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
