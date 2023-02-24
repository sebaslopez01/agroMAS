import { GetServerSideProps } from "next";

import { getUser } from "@/utils/auth";
import ProfileInvest from "@/components/cards/ProfileInvest";
import { FullUser } from "@/lib/types";
import LayoutGeneral from "@/components/LayoutGeneral";

interface CustomerInvestmentsProps {
  user: FullUser;
}

export default function CustomerInvestments({
  user,
}: CustomerInvestmentsProps) {
  return (
    <LayoutGeneral user={user} pageName="Mis Inversiones">
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
