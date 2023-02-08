import Header from "@/components/Header";
import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import ItemMarket from "@/components/ItemMarket";
import Layout from "@/components/Layout";
import CardInvest from "@/components/CardInvest";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Oportunities from "@/components/Oportunities";
import InvestDetail from "@/components/InvestDetail";

export default function Home() {
  return (
    <>
      <Meta></Meta>
      <Layout>
        <Header></Header>
        <div className="flex pt-20 justify-center flex-col bg-[#ECECEA]">
          <Categories />
          <Featured />
          <InvestDetail />
          <Oportunities />
        </div>
      </Layout>
    </>
  );
}
