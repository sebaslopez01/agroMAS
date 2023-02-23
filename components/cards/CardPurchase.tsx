import ItemOnPurchase from "./ItemOnPurchase";

interface CardPurchaseProps {
  purchaseId: number;
  purchaseCompleted: boolean;
  purchaseDate: string;
  purchaseCity: string;
  PurchaseState: string;
}

export default function CardPurchase({
  purchaseId,
  purchaseCompleted,
  purchaseDate,
  purchaseCity,
  PurchaseState,
}: CardPurchaseProps) {
  return (
    <div
      id="glass-bg"
      className="flex flex-col h-content w-[100%] my-2 rounded-3xl p-2"
    >
      <div className="flex justify-between w-[100%] items-end mt-2 px-5">
        <h1 className="text-xl font-medium">Pedido #{purchaseId}</h1>
        {purchaseCompleted ? (
          <div className="flex justify-center items-center h-8 w-40 border-x border-x-[#6d9773] rounded-lg">
            <p className="font-medium text-sm">Completado</p>
          </div>
        ) : (
          <div className="flex justify-center items-center h-8 w-40 border-x border-x-tertiary">
            <p className="font-medium text-sm">En proceso</p>
          </div>
        )}
      </div>
      <span className="text-gray-400 px-5 mb-2 text-sm">{purchaseDate}</span>
      <div className="grid grid-cols-3 px-5 text-sm">
          <p className="col-start-1">Producto</p>
          <p className="col-start-2 justify-self-center">Cantidad</p>
          <p className="col-start-3 justify-self-end">Precio</p>
        </div>
      <div className="bg-gray-100 p-2 mx-3 rounded-xl text-sm">
        <ItemOnPurchase />
        <ItemOnPurchase />
        <ItemOnPurchase />
      </div>
      <div className="flex justify-end px-8 py-2">
        <p className="text-lg text-gray-500">
          Total:
          <span className="text-xl font-medium text-black"> $ 12000</span>
        </p>
      </div>
      <div className="flex justify-between items-center px-3 mb-3">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map-pin mr-1"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
          </svg>
          <span className="text-sm">
            {purchaseCity}, {PurchaseState}
          </span>
        </div>
        <div className=" flex justify-center items-center h-8 w-40 px-3 rounded-lg bg-[#6d9773] text-sm text-white">
          <span>Ordenar de nuevo</span>
        </div>
      </div>
    </div>
  );
}
