import { GetServerSideProps } from "next";

import { getUser } from "@/utils/auth";
import { FullUser } from "@/lib/types";
import CardProject from "@/components/cards/CardProject";
import LayoutMarket from "@/components/LayoutMarket";

interface InvestmentProps {
  user: FullUser;
}

export default function Investments({ user }: InvestmentProps) {
  return (
    <LayoutMarket user={user}>
      <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] h-auto mx-auto mt-10 flex flex-col space-y-8">
        <CardProject />
        <CardProject />
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
