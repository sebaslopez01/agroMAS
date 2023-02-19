import Meta from "@/components/Meta";
import Footer from "@/components/navigation/Footer";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import SellerMenu from "@/components/navigation/SellerMenu";

export default function SellerIndexProfile() {
  return (
    <>
      <Meta />
      <NavBarMarket />
      <div className="flex justify-center items-center mx-auto mt-10">
        <SellerMenu userName="Don Jacinto" role="Vendedor" />
      </div>
      <Footer />
    </>
  );
}
