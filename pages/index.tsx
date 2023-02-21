import { GetServerSideProps } from "next";
import { User } from "@prisma/client";

import { getUser } from "@/utils/auth";
import Header from "@/components/home/Header";
import Layout from "@/components/Layout";
import Categories from "@/components/home/Categories";
import Oportunities from "@/components/home/Oportunities";

interface HomeProps {
  user: User | null;
}

export default function Home({ user }: HomeProps) {
  return (
    <Layout user={user}>
      <Header />
      <div className="flex pt-20 justify-center flex-col">
        <Categories />
        <Oportunities />
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
