import CardSellerProject from "@/components/cards/CardSellerProject";
import LayoutGeneral from "@/components/LayoutGeneral";
import ModalAddInvestment from "@/components/modals/ModalAddInvestment";
import { FullUser } from "@/lib/types";
import { getUser } from "@/utils/auth";
import { Investment } from "@prisma/client";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useRef, useState } from "react";

interface SellerProjectsProps {
  user: FullUser;
}

export default function SellerProjects({ user }: SellerProjectsProps) {
  const investRef = useRef(true);
  const [investments, setInvestment] = useState<
    | (Investment & {
        seller: {
          user: {
            firstName: string;
            lastName: string;
          };
        };
      })[]
    | null
  >(null);

  const getInvestments = async () => {
    const res = await axios.post("/api/dashboard/list-investments", {
      sellerId: user?.seller?.id,
    });

    setInvestment(res.data.products);
  };

  useEffect(() => {
    if (investRef.current) getInvestments();

    return () => {
      investRef.current = false;
    };
  });

  return (
    <LayoutGeneral user={user} pageName="Mis Proyectos">
      <ModalAddInvestment user={user} getInvestments={getInvestments} />
      <div className="flex flex-col justify-ceneter w-[80%] mx-auto p-5">
        {investments?.map((investment) => (
          <CardSellerProject key={investment.id} investment={investment} />
        ))}
      </div>
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
