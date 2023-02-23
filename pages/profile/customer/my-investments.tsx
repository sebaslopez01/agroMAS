import { GetServerSideProps } from "next";

import { getUser } from "@/utils/auth";
import { User } from "@prisma/client";
import ProfileInvest from "@/components/cards/ProfileInvest";
import LayoutMarket from "@/components/LayoutMarket";
import NavBarGeneral from "@/components/navigation/NavbarGeneral";

interface CustomerInvestmentsProps {
  user: User | null;
}

export default function CustomerInvestments({
  user,
}: CustomerInvestmentsProps) {
  return (
    <LayoutMarket user={user}>
      {user && user.role === "BUYER" ? (
        <div className="w-[80%] mx-auto h-auto flex flex-col mt-10 space-y-16">
          <ProfileInvest />
          <ProfileInvest />
          <ProfileInvest />
        </div>
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
