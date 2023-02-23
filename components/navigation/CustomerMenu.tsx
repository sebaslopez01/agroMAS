import Link from "next/link";
import {
  IconHome,
  IconReceipt,
  IconTimeline,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";
import { useRouter } from "next/router";

import { signout } from "@/utils/helpers";

interface ProfileMenuProps {
  userPurchases: number;
  userInvestments: number;
  userInvested: number;
  userName: string;
}

export default function CustomerMenu({
  userPurchases,
  userInvestments,
  userInvested,
  userName,
}: ProfileMenuProps) {
  const router = useRouter();

  return (
    <div className="h-[100vh] lg:h-[65vh] w-full flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-x-2 lg:space-y-0">
      <div className="flex h-[100%] w-[80%] lg:w-[25%] justify-center items-center mb-2 lg:mb-0">
        <div className="flex flex-col h-[100%] w-[100%] space-y-2">
          <div className="flex flex-col justify-center items-center w-[100%] h-[33%] text-sm bg-secondary/50 rounded-xl">
            <span className="text-2xl text-gray-900">{userPurchases}</span>
            <span className="text-sm text-gray-700">
              {userPurchases === 1 ? "Compra" : "Compras"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[100%] h-[33%] text-sm bg-secondary/50 rounded-xl">
            <span className="text-2xl text-gray-900">{userInvestments}</span>
            <span className="text-sm text-gray-700">
              {userInvestments === 1 ? "Inversión" : "Inversiones"}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] h-[33%] bg-[#6d9773] rounded-xl">
            <span className="text-2xl text-white">{userInvested}</span>
            <span className="text-sm text-white">Monto invertido</span>
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

        {/* my purchases */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/customer/my-purchases"
            className="flex h-10 items-center"
          >
            <IconReceipt className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span className="">Mis compras</span>
          </Link>
        </div>

        {/* my investments */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/customer/my-investments"
            className="flex h-10 items-center"
          >
            <IconTimeline className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span className="">Mis inversiones</span>
          </Link>
        </div>

        {/* settings */}
        <div
          id="glass-bg"
          className="rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/customer/settings"
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
          <button
            onClick={() => signout(router)}
            className="flex h-10 items-center"
          >
            <IconLogout className="w-[22px] h-[22px] stroke-green-900 stroke-[1.2px] mr-2" />
            <span> Cerrar sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
}
