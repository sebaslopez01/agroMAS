import Layout from "@/components/Layout";
import { FullUser } from "@/lib/types";
import { getUser } from "@/utils/auth";
import { GetServerSideProps } from "next";

interface NosotrosProps {
  user: FullUser;
}

export default function Nosotros({ user }: NosotrosProps) {
  return (
    <Layout user={user}>
      <div>
        <div className="w-full h-[96px]"></div>
        <button
          className="bg-gray-500 p-3 m-3 rounded-lg"
          onClick={() => window.history.back()}
        >
          {" "}
          &lt;---- Pa tra
        </button>
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
