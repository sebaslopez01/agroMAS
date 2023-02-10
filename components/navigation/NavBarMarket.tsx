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
    <div className="w-[100%] flex justify-center items-center z-50 h-[60px] lg:h-[80px] p-2 bg-secondary lg:pl-[15%] lg:pr-[12%]">
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
          <Image
            className="scale-50 lg:scale-75"
            src="/search-icon.png"
            alt=""
            width={50}
            height={50}
          ></Image>
        </button>
      </div>

      {/* Menu and Cart */}
      <div className="flex justify-around items-center w-[30%] text-white md:justify-evenly">
        <Link href="marketplace">
          <Image
            className="md:w-[40px]"
            src="/cart-icon.png"
            alt="Menu-icon"
            width={35}
            height={35}
          />
        </Link>
        {!menu ? (
          <Image
            className="md:w-[30px]"
            src="/close.png"
            alt="Agro-logo"
            width={25}
            height={25}
            onClick={handleMenu}
          />
        ) : (
          <Image
            className="md:w-[30px]"
            src="/menu.png"
            alt="Agro-logo"
            width={25}
            height={25}
            onClick={handleMenu}
          />
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
