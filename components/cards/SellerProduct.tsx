import Image from "next/image";

export default function SellerProduct() {
  return (
    <div
      id="glass-bg"
      className="flex flex-col h-fit w-[80%] space-y-3 rounded-xl p-3"
    >
      <img src="/frura1.jpg" className=" w-[80%] mx-auto object-cover rounded-xl" alt="" />

      <div className="flex flex-col items-center">
        <span className="text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-emerald-600">
          Mango maracatón
        </span>
        <span className="text-xs text-gray-500">Publicado el 01/01/2023</span>
      </div>
      <div className="flex flex-col items-center m-1">
        <span className="font-medium text-md lg:text-xl">231</span>
        <span className="text-xs text-gray-500">Vendidos</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-medium text-md lg:text-xl">$ 2.400</span>
        <span className="text-xs text-gray-500">Precio por Kg</span>
      </div>
      <div className="flex justify-center items-center w-full space-x-2">
        <button className="border rounded-lg border-gray-400 text-xs lg:text-sm hover:bg-gray-400 hover:text-white p-2 w-[50%]">
          Eliminar
        </button>
        <button className="border rounded-lg border-[#6d9773] text-xs lg:text-sm hover:bg-[#6d9773] hover:text-white p-2 w-[50%]">
          Editar
        </button>
      </div>
    </div>
  );
}
