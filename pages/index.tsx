import { GetServerSideProps } from "next";

import { getUser } from "@/utils/auth";
import { FullUser } from "@/lib/types";
import Header from "@/components/home/Header";
import Layout from "@/components/Layout";
import Categories from "@/components/home/Categories";
import CardInvest from "@/components/cards/CardInvest";

interface HomeProps {
  user: FullUser;
}

export default function Home({ user }: HomeProps) {
  return (
    <Layout user={user}>
      <Header />
      <div className="flex pt-20 justify-center flex-col">
        <Categories />
        <div className="flex w-[90%] mx-auto mt-10 p-5 justify-evenly flex-wrap mb-10">
          <CardInvest />
        </div>
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
