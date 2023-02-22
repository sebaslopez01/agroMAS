import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

interface SellerProductProps {
  id: string;
  name: string;
  price: number;
  sold: number;
  publishDate: Date;
  getProducts: () => Promise<void>;
}

export default function SellerProduct({
  id,
  name,
  price,
  sold,
  publishDate,
  getProducts,
}: SellerProductProps) {
  const router = useRouter();

  const deleteProduct = async (productId: string) => {
    const res = await axios.post("/api/dashboard/delete-product", {
      id: productId,
    });

    if (res.status !== 200) {
      console.log(res.data.message);
      return;
    }

    getProducts();
  };

  return (
    <div className="h-[350px] w-[80%] lg:w-[23%] grid grid-cols-4 grid-rows-6 min-w-fit max-w-sm">
      <div className="col-start-2 col-span-2 row-start-1 row-span-2 z-50 p-2">
        <img
          src="/frura1.jpg"
          className=" h-[100%] w-[100%] object-cover rounded-xl"
          alt=""
        />
      </div>
      <div
        id="glass-bg"
        className="col-start-1 col-span-4 row-start-2 row-span-5 rounded-xl px-5"
      ></div>
      <div className="flex flex-col items-center col-start-1 col-span-4 row-start-3 z-10">
        <span className="text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-emerald-600">
          {name}
        </span>
        <span className="text-xs text-gray-500">
          Publicado el {new Date(publishDate).toLocaleDateString()}
        </span>
      </div>
      <div className="row-start-4 col-start-2 col-span-2 flex flex-col items-center z-10 m-1">
        <span className="font-medium text-md lg:text-xl">{sold}</span>
        <span className="text-xs text-gray-500">Vendidos</span>
      </div>
      <div className="row-start-5 col-start-2 col-span-2 flex flex-col items-center z-10 m-1">
        <span className="font-medium text-md lg:text-xl">$ {price}</span>
        <span className="text-xs text-gray-500">Precio por Kg</span>
      </div>
      <div className="col-start-1 col-span-4 row-start-5 z-10"></div>
      <div className="flex justify-center items-center row-start-6 col-start-1 col-span-2 z-10">
        <button
          className="border border-red-200 text-xs lg:text-sm hover:bg-red-300 p-2 w-[80%]"
          onClick={() => deleteProduct(id)}
        >
          Eliminar
        </button>
      </div>
      <div className="flex justify-center items-center row-start-6 col-start-3 col-span-2 z-10">
        <button className="border border-green-200  text-xs lg:text-sm hover:bg-green-300 p-2 w-[80%]">
          Editar
        </button>
      </div>
    </div>
  );
}
