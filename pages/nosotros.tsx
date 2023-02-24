import Layout from "@/components/Layout";
import { FullUser } from "@/lib/types";
import { getUser } from "@/utils/auth";
import { GetServerSideProps } from "next";

interface NosotrosProps {
  user: FullUser;
}

export default function Nosotros({user}: NosotrosProps) {
  return (
    <Layout user={user}>
      {/* <NavbarGeneral namePage="Nosotros"/> */}
      <div className="w-full h-[200px] bg-[url('/backgrounds/4.jpg')] bg-cover bg-center mx-auto flex flex-col justify-end px-10 py-5">
        <h2 className="text-white text-5xl font-semibold">Nosotros</h2>
      </div>
      <div className="w-[80%] mx-auto h-auto mt-10 text-gray-700 text-lg">
        <p className="text-center">
          AgroMAS nace como una iniciativa para conectar el campo con las personas
        </p>
      </div>
    </Layout>
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
