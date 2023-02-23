import Meta from "@/components/Meta";
import CardPurchase from "@/components/cards/CardPurchase";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";
import NavbarGeneral from "@/components/navigation/NavbarGeneral";

export default function CustomerPurchases() {
  return (
    <>
      <Meta />
      <NavbarGeneral namePage="Mis compras"/>

      <div className="flex flex-col p-4 w-[75%] mx-auto">
        <CardPurchase
          purchaseId={3271}
          purchaseCompleted={true}
          purchaseDate="01/01/2023"
          purchaseCity="Medellín"
          PurchaseState="Antioquia"
        />
      </div>
      <Footer />
    </>
  );
}
