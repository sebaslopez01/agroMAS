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
              nameProduct="Pera"
              priceProduct={6_000}
              productLocation="Guarne"
            />
            <ItemMarket
              nameProduct="Banano"
              priceProduct={2_000}
              productLocation="Rionegro"
            />
            <ItemMarket
              nameProduct="Manzana"
              priceProduct={2_000}
              productLocation="Cisneros"
            />
            <ItemMarket
              nameProduct="Limón"
              priceProduct={2_000}
              productLocation="Uraba"
            />

            <ItemMarket
              nameProduct="Guayaba"
              priceProduct={2_000}
              productLocation="Turbo"
            />
            <ItemMarket
              nameProduct="Naranja"
              priceProduct={2_000}
              productLocation="Cañas gordas"
            />
            <ItemMarket
              nameProduct="Mandarina"
              priceProduct={2_000}
              productLocation="Santa Marta"
            />
            <ItemMarket
              nameProduct="Guanabana"
              priceProduct={2_000}
              productLocation="USA"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
