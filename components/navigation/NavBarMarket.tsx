import Link from "next/link";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import agroIcon from "@/public/agro-icon.ico";
import ModalNavbarMarket from "@/components/modals/ModalNavbarMarket";
import agroLogo from "@/public/logo.svg";
import SearchBox from "../marketplace/SearchBox";
import { Store } from "@/context/Store";

function NavBarMarket() {
  const [menu, setMenu] = useState(true);
  const [cartItemsCount, setCartItemCount] = useState(0);
  const { state } = useContext(Store);
  const { cart } = state;

  useEffect(() => {
    setCartItemCount(cart.reduce((a, c) => a + c.quantity, 0));
  }, [cart]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="w-[100%] fixed flex items-center bg-green-900/80 rounded-b-xl z-50 h-[60px] py-1">
        {/* Agro logo */}
        <div className="w-[20%] hidden lg:flex lg:pl-5">
          <Link href="/">
            <Image
              className="md:w-[100px]"
              src="/agro-logo.png"
              alt="Agro-logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Agro Icon sm/md*/}
        <Link className="w-[15%] h-[80%] lg:hidden " href="/">
          <Image
            className="w-[100%] h-[100%] object-contain mt-1 md:w-[150px]"
            src={agroIcon}
            alt="Agro-logo"
          />
        </Link>

        {/* Search */}
        {/* <div className="flex justify-center h-8 w-[65%] lg:w-[55%]">
          <input
            className="w-[70%] md:w-[70%] p-1 pl-3 focus:outline-none placeholder-gray-400 lg:text-lg lg:font-medium rounded-l-xl"
            placeholder="¿Qué buscas?..."
          ></input>
          <button className="flex w-[20%] md:w-[10%] justify-center items-center rounded-r-xl p-1 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search cursor-pointer stroke-green-900"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </button>
        </div> */}
        <SearchBox />

        {/* Menu and Cart */}
        <div className="flex justify-end items-center w-[25%] text-white md:justify-end space-x-3 pr-5 md:space-x-5">
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
            {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
          </Link>
          {!menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2 cursor-pointer"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="none"
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

        {/* Menu flexible sm/md*/}
        <div
          id="glass-bg"
          className={
            !menu
              ? "fixed top-0 right-0 w-[100%] md:w-[50%] lg:w-[30%] h-screen ease-in-out duration-500 z-50 px-2"
              : "fixed right-[-100%]"
          }
        >
          <div className="w-[100%] h-[20%] md:h-[23%] flex flex-col justify-between bg-green-900 p-5 rounded-b-3xl">
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
                width="48"
                height="48"
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
            <ModalNavbarMarket />
          </div>
          <ul className="pl-5">
            <li className="py-2">
              <Link
                href="nosotros"
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
                <span id="shadowText">Inicio</span>
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
                <span id="shadowText">Nosotros</span>
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
                <span id="shadowText">Invierte</span>
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="investments"
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
                <span id="shadowText">Contacto</span>
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="investments"
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
                <span id="shadowText">Políticas</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[60px] py-1"></div>
    </>
  );
}

export default NavBarMarket;
