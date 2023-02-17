import Meta from "@/components/Meta";
import CustomerMenu from "@/components/navigation/CustomerMenu";
import Footer from "@/components/navigation/Footer";
import NavBarMarket from "@/components/navigation/NavBarMarket";

export default function CustomerIndexProfile() {
  return (
    <>
      <Meta />
      <NavBarMarket />
      <div className="flex justify-center items-center mx-auto mt-10">
        <CustomerMenu userName="Elkin to" role="Comprador" />
      </div>
      <Footer />
    </>
  );
}

