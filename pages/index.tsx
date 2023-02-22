import Header from "@/components/home/Header";
import Meta from "@/components/Meta";
import Layout from "@/components/Layout";
import Categories from "@/components/home/Categories";
import React from "react";
import CardInvest from "@/components/cards/CardInvest";

export default function Home() {
  return (
    <>
      <Meta />
      <Layout>
        <Header />
        <div className="flex pt-20 justify-center flex-col">
          <Categories />
          <div className="flex w-[90%] mx-auto mt-10 p-5 justify-evenly flex-wrap mb-10">
            <CardInvest />
          </div>
        </div>
      </Layout>
    </>
  );
}
