import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ModalNavbar from "@/components/modals/modalNavBar";

export default function NavBar() {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div
      id="bg-Navbar"
      className="w-[100%] h-[10%] fixed flex justify-between items-center px-5 z-50"
    >
      {/* Nostros - Invierte */}
      <div className="w-[33%] space-x-16 pl-10 hidden lg:flex">
        <Link href="nosotros" className="text-white text-2xl font-bold">
          Nosotros
        </Link>
        <Link href="investments" className="text-white text-2xl font-bold">
          Invierte
        </Link>
      </div>

      {/* Agro logo */}
      <Link href="/">
        <Image
          className="md:w-[150px]"
          src="/agro-logo.png"
          alt="Agro-logo"
          width={100}
          height={100}
        />
      </Link>

      {/* Menu and Cart icon */}
      <div className="flex justify-end items-center space-x-5 w-[33%] lg:hidden text-white md:justify-evenly">
        <Link href="shoppingCart">
          <Image
            className="md:w-[50px]"
            src="/cart-icon.png"
            alt="Menu-icon"
            width={35}
            height={35}
          />
        </Link>
        {!menu ? (
          <Image
            className="md:w-[35px]"
            src="/close-icon.png"
            alt="Agro-logo"
            width={25}
            height={25}
            onClick={handleMenu}
          />
        ) : (
          <Image
            className="md:w-[35px]"
            src="/menu-icon.png"
            alt="Agro-logo"
            width={25}
            height={25}
            onClick={handleMenu}
          />
        )}
      </div>

      {/* Menu flexible*/}
      <div
        id="glass-bg"
        className={
          !menu
            ? "fixed top-0 left-0 w-[70%] h-screen p-5 ease-in-out duration-500 lg:hidden"
            : "fixed top-[-100%]"
        }
      >
        <div className="w-[100%] mb-5 flex justify-start md:p-5">
          <Link href="/">
            <Image
              className="md:scale-150"
              src="/agro-logo.png"
              alt="Agro-logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <ul>
          <li className="py-2">
            <button
              onClick={() => console.log("")}
              className="text-2xl mt-5 text-white md:text-3xl"
            >
              Iniciar sesión
            </button>
          </li>
          <li className="py-2">
            <Link
              href="nosotros"
              className="text-2xl mt-5 text-white md:text-3xl"
            >
              Inicio
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="nosotros"
              className="text-2xl mt-5 text-white md:text-3xl"
            >
              Nosotros
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="investments"
              className="text-2xl mt-5 text-white md:text-3xl"
            >
              Invierte
            </Link>
          </li>
        </ul>
      </div>

      {/* Search - Cart - User */}
      <div className="w-[33%] space-x-16 pr-10 justify-end hidden lg:flex">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search cursor-pointer"
          width="42"
          height="42"
          viewBox="0 0 24 24"
          stroke-width="1.3"
          stroke="white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>

        {/* Cart Icon */}
        <Link href="shoppingCart" className="self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-cart cursor-pointer"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            stroke-width="1.3"
            stroke="white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17h-11v-14h-2"></path>
            <path d="M6 5l14 1l-1 7h-13"></path>
          </svg>
        </Link>

        {/* User icon */}
        <ModalNavbar />
      </div>
    </div>
  );
}
