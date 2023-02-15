import Meta from "@/components/Meta";
import CardPurchase from "@/components/cards/CardPurchase";

export default function SellerPurchases() {
  return (
    <>
      <Meta />
      <div className="grid grid-cols-3 w-full py-3 fixed z-50 h-16">
        <button onClick={() => window.history.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left col-start-1 ml-3"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </button>
        <div className="m-auto col-start-2">
          <h1 className="text-2xl p-3 font-semibold">Mi perfil</h1>
        </div>
      </div>
      <div className="flex">
      <div className="flex flex-col p-4 pt-16 w-[100%]">
          <h1 className="text-xl mb-3">Historial de compras</h1>
          <CardPurchase
            purchaseId={3271}
            purchaseCompleted={true}
            purchaseDate="01/01/2023"
            purchaseCity="Medellín"
            PurchaseState="Antioquia"
          />
        </div>
      </div>
    </>
  );
}
