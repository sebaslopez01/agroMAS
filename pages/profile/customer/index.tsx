import { GetServerSideProps } from "next";

import { getUser } from "@/utils/auth";
import { User } from "@prisma/client";
import LayoutMarket from "@/components/LayoutMarket";
import CustomerMenu from "@/components/navigation/CustomerMenu";

interface CustomerIndexProfileProps {
  user: User | null;
}

export default function CustomerIndexProfile({
  user,
}: CustomerIndexProfileProps) {
  return (
    <LayoutMarket>
      <div className="flex justify-center items-center mx-auto mt-10">
        {user && user.role === "BUYER" ? (
          <CustomerMenu userName={`${user.firstName} ${user.lastName}`} />
        ) : (
          <span>
            Por favor inicia sesión como comprador para acceder al dashboard
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
