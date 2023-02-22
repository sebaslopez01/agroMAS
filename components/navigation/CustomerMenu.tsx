import Avatar from "../Avatar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import bg from "@/public/bg-profile.jpg";
import { signout } from "@/utils/helpers";

interface ProfileMenuProps {
  userName: string;
}

export default function CustomerMenu({ userName }: ProfileMenuProps) {
  const router = useRouter();

  return (
    <div className="h-[65vh] w-full flex items-center justify-center">
      {/* card name  */}
      <div className="m-3 h-full w-[25%] grid grid-cols-[4%_92%_4%] grid-rows-[4%_92%_4%]">
        {/* background image */}
        <Image
          src={bg}
          alt="background"
          className="col-start-1 col-span-2 row-start-1 row-span-2 rounded-3xl w-[100%] h-[100%]"
        />

        <div
          id="glass-bg"
          className="rounded-3xl col-start-2 col-span-2 row-start-2 row-span-2 "
        >
          <div className="flex flex-col items-center justify-center mb-5 py-3 space-y-10">
            <Avatar />
            <div className="flex flex-col justify-center items-center">
              <p className="text-xs text-gray-300">Hola,</p>
              <h2 className="text-2xl font-semibold text-white">{userName}</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xs text-gray-300">Estás registrado como:</p>
              <h2 className="text-xl font-semibold text-white">Comprador</h2>
            </div>
          </div>
        </div>
      </div>

      {/* buttons div */}
      <div className="m-3 h-[100%] w-[25%] flex flex-col place-content-between">
        {/* go home */}
        <div
          id="glass-bg"
          className="w-60 rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link href="/" className="flex h-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home mr-2 stroke-green-900"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>
            <span className="">Ir al inicio</span>
          </Link>
        </div>

        {/* my purchases link */}
        <div
          id="glass-bg"
          className="w-60 rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/customer/my-purchases"
            className="flex h-10 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-receipt mr-2 stroke-green-900"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"></path>
            </svg>
            <span className="">Mis compras</span>
          </Link>
        </div>

        {/* my investments */}
        <div
          id="glass-bg"
          className="w-60 rounded-xl p-3 hover:translate-x-5 duration-300 stroke-green-900"
        >
          <Link
            href="/profile/customer/my-investments"
            className="flex h-10 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-timeline mr-2"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 16l6 -7l5 5l5 -6"></path>
              <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
            <span className="">Mis inversiones</span>
          </Link>
        </div>

        {/* settings */}
        <div
          id="glass-bg"
          className="w-60 rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <Link
            href="/profile/customer/settings"
            className="flex h-10 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-settings mr-2 stroke-green-900"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            </svg>
            <span>Configuración</span>
          </Link>
        </div>

        {/* logout button */}
        <div
          id="glass-bg"
          className="w-60 rounded-xl p-3 hover:translate-x-5 duration-300"
        >
          <button
            className="flex h-10 items-center"
            onClick={() => signout(router)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-logout mr-2 stroke-green-900"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
            </svg>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
}
