import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Modal = dynamic(() => import("flowbite-react").then((mod) => mod.Modal), {
  ssr: false,
});

const ModalHeader = dynamic(
  () => import("flowbite-react").then((mod) => mod.Modal.Header),
  { ssr: false }
);

export default function modalNavbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Icon session */}
      <div
        className="flex justify-start items-center space-x-2 cursor-pointer"
        onClick={() => setShowLogin(!showLogin)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user-circle cursor-pointer w-[22px] h-[22px] lg:w-[32px] lg:h-[32px] stroke-white stroke-[1.5] lg:stroke-[1.3]"
          viewBox="0 0 24 24"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
        </svg>
        <div className="lg:hidden text-xl text-white font-medium">
          Iniciar sesión
        </div>
      </div>

      {/* Modal LogIn */}
      <Modal
        show={showLogin}
        size="md"
        popup={true}
        onClose={() => setShowLogin(!showLogin)}
        className="h-[120vh]"
      >
        <ModalHeader className="h-0"></ModalHeader>
        <div className="w-full flex flex-col items-center justify-center pb-10 pt-5 space-y-5">
          <h1 className="text-xl font-bold">Iniciar sesión</h1>
          <div className="w-[80%] flex flex-col space-y-3">
            <label htmlFor="" className="text-lg text-gray-700">Correo electrónico</label>
            <input
              className="focus:border-gray-300 focus:shadow-md focus:ring-0 h-[40px] rounded-lg text-base p-0 pl-3 border border-gray-300"
              type="email"
              placeholder="email@ejemplo.com"
              required
            />
            <label htmlFor="" className="text-lg text-gray-700">Contraseña</label>
            <input
              className="focus:border-gray-300 focus:shadow-md focus:ring-0 h-[40px] rounded-lg text-base p-0 pl-3 border border-gray-300"
              type="password"
              required
            />
          </div>
          <div className="w-[80%] text-sm flex justify-between">
            <div className="space-x-1 flex items-center">
              <input
                className="checked:bg-[#6D9773] cursor-pointer focus:border-gray-300 focus:shadow-md focus:ring-0"
                type="checkbox"
              />
              <label htmlFor="">Recordarme</label>
            </div>
            <button className="underline text-gray-700 hover:scale-105 duration-200">
              Restablecer contraseña
            </button>
          </div>
          <button
            type="submit"
            className="p-1 bg-[#6D9773] hover:scale-110 duration-500 rounded-md w-[30%] text-white"
          >
            Iniciar sesión
          </button>
          <div className="w-[80%] flex justify-center space-x-2">
            <span>¿No tienes cuenta?</span>
            <Link href="registro" className="underline text-gray-700 hover:scale-105 duration-200">
              Regístrate
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
