import Header from "@/components/home/Header";
import Meta from "@/components/Meta";
import Footer from "@/components/navigation/Footer";
import ItemMarket from "@/components/cards/ItemMarket";
import Layout from "@/components/Layout";
import CardInvest from "@/components/cards/CardInvest";
import Categories from "@/components/home/Categories";
import Featured from "@/components/home/Featured";
import Oportunities from "@/components/home/Oportunities";
import InvestDetail from "@/components/cards/InvestDetail";

export default function Home() {
  return (
    <>
      <Meta />
      <Layout>
        <Header />
        <div className="flex pt-20 justify-center flex-col bg-[#ECECEA]">
          {/* <Categories /> */}
          {/* <Featured /> */}
          <Oportunities />
          <InvestDetail />
        </div>
      </Layout>
    </>
  );
}
