import axios from "axios";
import { GetServerSideProps } from "next";

interface ResponseWompiProps {
  email: string;
}

function ResponseWompi({ email }: ResponseWompiProps) {
  return (
    <div>
      <h1>
        Tu transacción fue creada con éxito, se te informara al correo {email}
        cuando haya sido aprovada
      </h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const transactionId = context.query["id"];

  try {
    const res = await axios.get(
      `https://production.wompi.co/v1/transactions/${transactionId}`
    );

    const email = res.data.customer_email;

    return {
      props: {
        email,
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

export default ResponseWompi;
