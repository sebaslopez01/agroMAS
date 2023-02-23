import Link from "next/link";
import {
  IconHome,
  IconBuildingStore,
  IconSeeding,
  IconSettings,
  IconLogout,
  IconReceipt,
} from "@tabler/icons-react";
("@tabler/icons-react");

interface SellerMenuProps {
  sellerSales: number;
  sellerTotalProducts: number;
  sellerTotalProjects: number;
  sellerInvestors: number;
  sellerTotalEarnings: number;
}

export default function SellerMenu({
  sellerSales,
  sellerTotalProducts,
  sellerTotalProjects,
  sellerInvestors,
  sellerTotalEarnings,
}: SellerMenuProps) {
  return (
    <div className="h-[100vh] lg:h-[65vh] w-full flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-x-2 lg:space-y-0">
      <div className="flex h-[100%] w-[80%] lg:w-[25%] justify-center items-center mb-2 lg:mb-0">
        <div className="flex flex-col h-[100%] w-[100%] space-y-2">
          <div className="flex w-[100%] h-[33%]  space-x-2">
            <div className="flex flex-col justify-center items-center w-[50%] h-[100%] text-sm bg-secondary/50 rounded-xl">
              <span className="text-2xl text-gray-900">{sellerSales}</span>
              <span className="text-sm text-gray-700">{sellerSales == 1 ? "Venta" : "Ventas"}</span>
            </div>
            <div className="flex flex-col justify-center items-center w-[50%] h-[100%] text-sm bg-secondary/50 y rounded-xl">
              <span className="text-2xl text-gray-900">{sellerTotalProducts}</span>
              <span className="text-sm text-gray-700">{sellerTotalProducts == 1 ? "Producto" : "Productos"}</span>
            </div>
          </div>
          <div className="flex w-[100%] h-[33%]  space-x-2">
            <div className="flex flex-col justify-center items-center w-[50%] h-[100%] text-sm bg-secondary/50 rounded-xl">
              <span className="text-2xl text-gray-900">{sellerTotalProjects}</span>
              <span className="text-sm text-gray-700">{sellerTotalProjects == 1 ? "Proyecto" : "Proyectos"}</span>
            </div>
            <div className="flex flex-col justify-center items-center w-[50%] h-[100%] text-sm bg-secondary/50 rounded-xl">
              <span className="text-2xl text-gray-900">{sellerInvestors}</span>
              <span className="text-sm text-gray-700">{sellerInvestors == 1 ? "Inversionista" : "Inversionistas"}</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] h-[33%] bg-[#6d9773] rounded-xl">
            <span className="text-2xl text-white">$ {sellerTotalEarnings}</span>
            <span className="text-sm text-white">Ganancias totales</span>
          </div>
        </div>
      </div>

      {/* buttons div */}
      <div className="h-fit lg:h-[100%] w-[80%] lg:w-[25%] flex flex-col space-y-3 lg:space-y-0 lg:place-content-between">
        {/* go home */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link href="/" className="flex h-10 items-center">
            <IconHome className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span className="">Ir al inicio</span>
          </Link>
        </div>

        {/* my purchases link */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/seller/my-purchases"
            className="flex h-10 items-center"
          >
            <IconReceipt className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span className="">Mis compras</span>
          </Link>
        </div>

        {/* my products link */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/seller/my-products"
            className="flex h-10 items-center"
          >
            <IconBuildingStore className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span className="">Mis productos</span>
          </Link>
        </div>

        {/* my projects */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/seller/my-projects"
            className="flex h-10 items-center"
          >
            <IconSeeding className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span className="">Mis proyectos</span>
          </Link>
        </div>

        {/* settings */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/seller/settings"
            className="flex h-10 items-center"
          >
            <IconSettings className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span>Configuración</span>
          </Link>
        </div>

        {/* logout button */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <button className="flex h-10 items-center">
            <IconLogout className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span> Cerrar sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
}
