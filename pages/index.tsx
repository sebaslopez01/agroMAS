import Header from "@/components/home/Header";
import Meta from "@/components/Meta";
import Layout from "@/components/Layout";
import Categories from "@/components/home/Categories";
import Oportunities from "@/components/home/Oportunities";

export default function Home() {
  return (
    <>
      <Meta />
      <Layout>
        <Header />
        <div className="flex pt-20 justify-center flex-col">
          <Categories />
          <Oportunities />
        </div>
      </Layout>
    </>
  );
}
