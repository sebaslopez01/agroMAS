import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Avatar from "../Avatar";

export default function NavBar() {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div
      id="bg-Navbar"
      className="w-[100%] h-[10%] flex justify-between items-center px-5 z-50"
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
        <Link href="marketplace">
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
            <Link
              href="profile"
              className="text-2xl mt-5 text-white md:text-3xl"
            >
              Iniciar sesión
            </Link>
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
        <button>
          <img
            className="object-scale-down self-center"
            src="search-icon.png"
            alt="Search-icon"
          />
        </button>
        <Link href="marketplace" className="self-center">
          <img
            className="object-scale-down"
            src="cart-icon.png"
            alt="ShoppingCart-icon"
          />
        </Link>
        <Link href="profile" className="scale-50">
          <Avatar />
        </Link>
      </div>
    </div>
  );
}
