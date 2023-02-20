import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalNavbar from "@/components/modals/ModalNavbar";
import agroLogo from "@/public/logo.svg";

export default function NavBar() {
  const [menu, setMenu] = useState(true);
  const [backg, setBackg] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleBackg = () => {
      if (window.scrollY >= 100) {
        setBackg(true);
      } else {
        setBackg(false);
      }
    };
    window.addEventListener("scroll", handleBackg);
  });

  return (
    <div
      className={
        backg
          ? "w-[100%] h-[7%] lg:h-[9%] 2xl:h-[7%] fixed flex justify-between items-center px-5 pb-2 z-50 bg-[#6D9773] duration-700"
          : "w-[100%] h-[7%] lg:h-[10%] 2xl:h-[8%] fixed flex justify-between items-center px-5 z-50"
      }
    >
      {/* Agro logo */}
      <div className="w-[30%] h-full flex items-center pl-2 md:pl-5 lg:pl-6 xl:pt-0">
        <Link href="/">
          <Image
            className="md:w-[100px] "
            src="/agro-logo.png"
            alt="Agro-logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Nosotros Invierte */}
      <div className="w-[40%] hidden lg:flex justify-center space-x-10">
        <Link href="nosotros" className="text-white text-2xl font-bold">
          Nosotros
        </Link>
        <Link href="investments" className="text-white text-2xl font-bold">
          Invierte
        </Link>
      </div>

      {/* Cart and user */}
      <div className="w-[30%] pr-6 justify-between hidden lg:flex">
        <div className="w-[100%] flex justify-end space-x-10">
          <Link href="shoppingCart" className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart cursor-pointer"
              width="32"
              height="32"
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
          <ModalNavbar />
        </div>
      </div>

      {/* Menu and Cart icon */}
      <div className="flex justify-end items-center space-x-5 w-[50%] lg:hidden text-white pr-2 md:pr-5">
        <Link href="shoppingCart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-cart cursor-pointer"
            width="30"
            height="30"
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
        {!menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2 cursor-pointer"
            width="30"
            height="30"
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2 cursor-pointer"
            width="30"
            height="30"
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

      {/* Menu flexible*/}
      <div
        id="glass-bg"
        className={
          !menu
            ? "fixed top-0 right-0 w-[100%] md:w-[50%] h-screen ease-in-out duration-500 lg:hidden px-2"
            : "fixed right-[-100%]"
        }
      >
        <div className="w-[100%] h-[160px] flex flex-col justify-between bg-[#6D9773] p-5">
          <div className="w-full h-auto flex justify-between items-center">
            <Link href="/">
              <Image
                src={agroLogo}
                alt=""
                className="w-[48px] h-[48px] object-contain"
              />
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x cursor-pointer stroke-white"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={handleMenu}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
          <ModalNavbar />
        </div>
        <ul className="pl-5">
          <li className="py-2">
            <Link
              href="/"
              className="text-2xl mt-5 text-green-900 font-medium flex space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home w-[30px] h-[30px] stroke-green-900"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
              </svg>
              <span>Inicio</span>
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="nosotros"
              className="text-2xl mt-5 text-green-900 font-medium flex space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users w-[30px] h-[30px] stroke-green-900"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
          <li className="py-2">
            <Link
              href="investments"
              className="text-2xl mt-5 text-green-900 font-medium flex space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-timeline w-[30px] h-[30px] stroke-green-900"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
          <li className="py-2">
            <Link
              href="contact"
              className="text-2xl mt-5 text-green-900 font-medium flex space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-message-2 w-[30px] h-[30px] stroke-green-900"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path>
                <path d="M8 9l8 0"></path>
                <path d="M8 13l6 0"></path>
              </svg>
              <span>Contacto</span>
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="policy"
              className="text-2xl mt-5 text-green-900 font-medium flex space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-license w-[30px] h-[30px] stroke-green-900"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
    </div>
  );
}
