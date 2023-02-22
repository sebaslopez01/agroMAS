import Layout from "@/components/Layout";
import LayoutMarket from "@/components/LayoutMarket";
import { Store } from "@/context/Store";
import { StoreActionKind } from "@/lib/enums";
import { FullUser } from "@/lib/types";
import { getUser } from "@/utils/auth";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";

interface ResponseWompiProps {
  email: string;
  user: FullUser;
}

export default function ResponseWompi({ email, user }: ResponseWompiProps) {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({
      type: StoreActionKind.CART_RESET,
      payload: { id: "", price: 0, quantity: 0 },
    });
  }, []);

  return (
    <LayoutMarket user={user}>
      <div className="py-20 text-center">
        <h1>
          Tu transacción fue creada con éxito, se te informara al correo {email}
          cuando haya sido aprovada
        </h1>
      </div>
    </LayoutMarket>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const user = await getUser(req, res);
  const transactionId = query["id"];

  try {
    const res = await axios.get(
      `https://sandbox.wompi.co/v1/transactions/${transactionId}`
    );

    const email = res.data.customer_email;

    return {
      props: {
        email,
        user,
      },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
