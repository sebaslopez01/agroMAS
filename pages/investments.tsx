import Meta from "@/components/Meta";
import Layout from "@/components/Layout";
import CardProject from "@/components/cards/CardProject";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";

export default function Investments() {
  return (
    <>
      <Meta />
      <NavBarMarket />
      {/* <div className="w-full h-[100px]"></div> */}
      <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] h-auto mx-auto mt-10 flex flex-col space-y-8">
        <CardProject />
        <CardProject />
      </div>
      <Footer />
    </>
  );
}
