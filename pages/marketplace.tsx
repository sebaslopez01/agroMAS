import Meta from "@/components/Meta";
import ItemMarket from "@/components/cards/ItemMarket";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";

export default function marketplace() {
  return (
    <>
      <Meta />
      <NavBarMarket />
      <div className="bg-gray-200">
        <div className="flex flex-col lg:w-[80%] lg:m-auto">
          <div className="flex justify-center w-full mt-7 mb-5">
            <span className="text-2xl font-semibold text-gray-700">
              Resultados de búsqueda...
            </span>
          </div>
          <div className="flex flex-wrap justify-center w-full">
            <ItemMarket
              nameProduct="Pera criolla"
              seller="Jacinto"
              priceProduct={6_000}
              undPerItem="Kg"
              productCity="Guarne"
              productState="Antioquia"
            />
            <ItemMarket
              nameProduct="Banano Dulce"
              seller="Otro Jacinto"
              priceProduct={2_000}
              undPerItem="Kg"
              productCity="Rionegro"
              productState="Antioquia"
            />
            <ItemMarket
              nameProduct="Manzana Royal"
              seller="Jacinta"
              priceProduct={2_000}
              undPerItem="Kg"
              productCity="Cisneros"
              productState="Antioquia"
            />

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
