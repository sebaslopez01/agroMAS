import { GetServerSideProps } from "next";

import prisma from "@/lib/prisma";
import { getUser } from "@/utils/auth";
import { FullUser } from "@/lib/types";
import CardProject from "@/components/cards/CardProject";
import LayoutMarket from "@/components/LayoutMarket";
import { Investment } from "@prisma/client";

interface InvestmentProps {
  user: FullUser;
  investments: (Investment & {
    seller: {
      user: {
        firstName: string;
        lastName: string;
      };
    };
  })[];
}

export default function Investments({ user, investments }: InvestmentProps) {
  return (
    <LayoutMarket user={user}>
      <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] h-auto mx-auto mt-10 flex flex-col space-y-8">
        {investments.map((investment) => (
          <CardProject key={investment.id} investment={investment} />
        ))}
      </div>
    </LayoutMarket>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);
  const investments = await prisma.investment.findMany({
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
      investments,
    },
  };
};
