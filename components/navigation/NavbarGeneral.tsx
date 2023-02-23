import { IconChevronLeft, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { FullUser } from "@/lib/types";
import agroLogo from "@/public/logo.svg";
import ModalNavBar from "../modals/ModalNavbar";

interface NavBarGeneralProps {
  pageName: string;
  user: FullUser;
}

export default function NavbarGeneral({ pageName, user }: NavBarGeneralProps) {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="w-full h-[60px] flex justify-between items-center bg-[#6D9773] fixed p-3 z-50">
        <IconChevronLeft
          onClick={() => router.back()}
          className="stroke-[1.5px] w-[40px] h-[40px] stroke-white cursor-pointer"
        />
        <h1 className="text-white text-xl lg:text-2xl font-semibold">
          {pageName}
        </h1>
        <IconMenu2
          onClick={handleMenu}
          className="stroke-[1.5px] w-[35px] h-[35px] stroke-white cursor-pointer"
        />
      </div>
      <div
        id="glass-bg"
        className={
          menu
            ? "fixed top-0 right-0 w-[100%] md:w-[50%] lg:w-[30%] h-screen ease-in-out duration-500 z-50 px-2"
            : "fixed right-[-100%]"
        }
      >
        <div className="w-[100%] h-[160px] xl:h-[180px] flex flex-col justify-between bg-[#6D9773] p-4 rounded-b-md">
          <div className="w-full h-auto flex justify-between items-center">
            <Link href="/">
              <Image
                src={agroLogo}
                alt=""
                className="w-[45px] h-[45px] object-contain"
              />
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x cursor-pointer stroke-white"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={handleMenu}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
          <ModalNavBar user={user} isMarket />
        </div>
        <ul className="pl-5">
          <li className="py-2 hover:translate-x-3 duration-300">
            <Link
              href="/"
              className="text-xl mt-5 text-green-900 font-medium flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home w-[22px] h-[22px] stroke-green-900"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
              </svg>
              <span>Inicio</span>
            </Link>
          </li>
          <li className="py-2 hover:translate-x-3 duration-300">
            <Link
              href="/nosotros"
              className="text-xl mt-5 text-green-900 font-medium flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users w-[22px] h-[22px] stroke-green-900"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
              </svg>
              <span>Nosotros</span>
            </Link>
          </li>
          <li className="py-2 hover:translate-x-3 duration-300">
            <Link
              href="investments"
              className="text-xl mt-5 text-green-900 font-medium flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-timeline w-[22px] h-[22px] stroke-green-900"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
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
              <span>Invierte</span>
            </Link>
          </li>
          <li className="py-2 hover:translate-x-3 duration-300">
            <Link
              href="contact"
              className="text-xl mt-5 text-green-900 font-medium flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-message-2 w-[22px] h-[22px] stroke-green-900"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path>
                <path d="M8 9l8 0"></path>
                <path d="M8 13l6 0"></path>
              </svg>
              <span>Contacto</span>
            </Link>
          </li>
          <li className="py-2 hover:translate-x-3 duration-300">
            <Link
              href="policy"
              className="text-xl mt-5 text-green-900 font-medium flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-license w-[22px] h-[22px] stroke-green-900"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                <path d="M9 7l4 0"></path>
                <path d="M9 11l4 0"></path>
              </svg>
              <span>Políticas</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-[60px] py-1"></div>
    </>
  );
}
