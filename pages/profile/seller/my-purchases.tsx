import CardPurchase from "@/components/cards/CardPurchase";
import LayoutGeneral from "@/components/LayoutGeneral";
import { FullUser } from "@/lib/types";
import { getUser } from "@/utils/auth";
import { GetServerSideProps } from "next";

interface CustomerPurchasesProps {
  user: FullUser;
}

export default function CustomerPurchases({ user }: CustomerPurchasesProps) {
  return (
    <LayoutGeneral user={user} pageName="Mis Compras">
      <div className="flex flex-col p-4 w-[75%] mx-auto">
        <CardPurchase
          purchaseId={3271}
          purchaseCompleted={true}
          purchaseDate="01/01/2023"
          purchaseCity="Medellín"
          PurchaseState="Antioquia"
        />
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
