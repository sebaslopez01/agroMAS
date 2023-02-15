import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import agroIcon from "@/public/agro-icon.ico";

export default function NavBarMarket() {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-[100%] flex justify-center items-center z-50 h-[60px] lg:h-[80px] p-2 lg:pl-[15%] lg:pr-[12%] bg-black">
      {/* Agro logo */}
      <div className="w-[30%] space-x-16 pl-10 hidden lg:flex">
        <Link href="/">
          <Image
            className="md:w-[150px]"
            src="/agro-logo.png"
            alt="Agro-logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Agro Icon sm/md*/}
      <Link className="w-[15%] h-[100%] lg:hidden " href="/">
        <Image
          className="w-[100%] h-[100%] object-contain mt-1 md:w-[150px]"
          src={agroIcon}
          alt="Agro-logo"
        />
      </Link>

      {/* Search */}
      <div className="flex justify-center h-10 w-[65%] lg:w-[40%]">
        <input
          id="glass-bg"
          className="w-[70%] md:w-[70%] p-3 focus:outline-none text-gray-600 placeholder-gray-400 lg:text-xl lg:font-medium rounded-l-xl"
          placeholder="¿Qué buscas?..."
        ></input>
        <button
          id="card"
          className="flex w-[20%] md:w-[10%] justify-center items-center rounded-r-xl p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </button>
      </div>

      {/* Menu and Cart */}
      <div className="flex justify-around items-center w-[30%] text-white md:justify-evenly">
        <Link href="shoppingCart">
          <Image
            className="md:w-[40px]"
            src="/cart-icon.png"
            alt="Menu-icon"
            width={35}
            height={35}
          />
        </Link>
        {!menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x cursor-pointer"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={handleMenu}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2 cursor-pointer"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={handleMenu}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        )}
      </div>

      {/* Menu flexible sm/md*/}
      <div
        id="glass-bg"
        className={
          !menu
            ? "fixed top-0 left-0 w-[70%] lg:w-[40%] h-screen p-5 ease-in-out duration-500 z-50"
            : "fixed top-[-100%]"
        }
      >
        <div className="w-[100%] mb-5 flex justify-start md:p-5">
          <Link href="/">
            <Image
              className="md:scale-150"
              src="/agro-logo-black.png"
              alt="Agro-logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <ul>
          <li className="py-2">
            <Link
              href="profile"
              className="text-2xl mt-5 text-gray-700 font-semibold md:text-3xl"
            >
              Iniciar sesión
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="nosotros"
              className="text-2xl mt-5 text-gray-700 font-semibold md:text-3xl"
            >
              Inicio
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="nosotros"
              className="text-2xl mt-5 text-gray-700 font-semibold md:text-3xl"
            >
              Nosotros
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="investments"
              className="text-2xl mt-5 text-gray-700 font-semibold md:text-3xl"
            >
              Invierte
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
