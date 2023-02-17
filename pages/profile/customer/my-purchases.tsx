import Meta from "@/components/Meta";
import CardPurchase from "@/components/cards/CardPurchase";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";

export default function CustomerPurchases() {
  return (
    <>
      <Meta />
      <NavBarMarket />

      <div className="flex flex-col p-4 w-[75%] mx-auto">
        <h1 className="text-xl my-5">Historial de compras</h1>
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
