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
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
      {/* Icon session */}
      <div
        className="flex justify-start items-center space-x-2 cursor-pointer"
        onClick={() => setShowLogin(!showLogin)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user-circle cursor-pointer w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] stroke-white lg:stroke-white stroke-[1.5] lg:stroke-[1.3]"
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
        <div className="text-2xl text-white font-medium">
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
          <h1 className="text-xl font-bold">Inicar sesión</h1>
          <div className="w-[80%] flex flex-col space-y-3">
            <label htmlFor="">Correo electrónico</label>
            <input
              className="rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              type="email"
              placeholder="ejemplo@gmail.com"
              required
            />
            <label htmlFor="">Contraseña</label>
            <input
              className="rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              type="password"
              required
            />
          </div>
          <div className="w-[80%] text-sm flex justify-between">
            <div className="space-x-1 flex items-center">
              <input
                className="rounded-full checked:bg-gray-500 cursor-pointer"
                type="checkbox"
              />
              <label htmlFor="">Recordarme</label>
            </div>
            <button className="underline text-gray-700">
              Restablecer contraseña
            </button>
          </div>
          <button
            type="submit"
            className="p-1 border border-black hover:scale-110 duration-500 hover:bg-white w-[30%]"
          >
            Inicar sesión
          </button>
          <div className="w-[80%] flex justify-center space-x-2">
            <span>¿No tienes cuenta?</span>
            <button
              onClick={() => {
                setShowSignin(!showSignin);
                setShowLogin(!showLogin);
              }}
              className="underline text-gray-700"
            >
              Regístrate
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal SignIn */}
      <Modal
        show={showSignin}
        size="md"
        popup={true}
        onClose={() => setShowSignin(!showSignin)}
        className="h-[120vh]"
      >
        <ModalHeader className="h-0 p-0"></ModalHeader>
        <div className="w-full flex flex-col items-center justify-center pb-5 pt-3 space-y-2">
          <h1 className="text-xl font-bold">Registro</h1>
          <div className="w-[80%] flex flex-col space-y-3">
            <div className="flex flex-col">
              <label htmlFor="">Nombres</label>
              <input
                className="h-[30px] rounded-full border-gray-400 focus:ring focus:ring-gray-300"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Apellidos</label>
              <input
                className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Celular</label>
              <input
                className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                type="number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Registrarte como:</label>
              <select
                name="rol"
                id="roles"
                required
                className="h-[30px] p-0 pl-2 text-sm rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              >
                <option value="seleccionar" selected>
                  Seleccionar
                </option>
                <option value="buyer">Cliente</option>
                <option value="seller">Vendedor</option>
              </select>
            </div>
            {/* Documento */}
            {/* <div className="flex flex-col">
              <label htmlFor="">Tipo de documento</label>
              <select
                name="idTypes"
                id="ids"
                required
                className="rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              >
                <option className="cursor-pointer" value="seleccionar" selected>
                  Seleccionar
                </option>
                <option className="cursor-pointer" value="cedula">
                  Cédula de Ciudadanía
                </option>
                <option className="cursor-pointer" value="tarjetaDeIdentidad">
                  Cédula de Extranjería
                </option>
                <option className="cursor-pointer" value="Contraseña">
                  Pasaporte
                </option>
              </select>
            </div> */}
            {/* <div className="flex flex-col">
              <label htmlFor="nId">Nº de documento</label>
              <input
                className="rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                type="text"
                placeholder="Nº de documento"
              />
            </div> */}
            <div className="flex flex-col">
              <label htmlFor="">Correo electrónico</label>
              <input
                className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Contraseña</label>
              <input
                className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                type="password"
              />
            </div>
          </div>
          <div className="w-[80%] space-x-1">
            <input
              className="rounded-full appearance-none checked:bg-slate-600 cursor-pointer focus:outline-none"
              type="checkbox"
            />
            <label className="text-sm" htmlFor="">
              He leído y acepto los{" "}
              <Link className="text-gray-500 underline" href="/">
                términos y condiciones
              </Link>
            </label>
          </div>
          <input
            type="submit"
            value="Registrarse"
            className="p-1 border border-black hover:scale-110 duration-500 hover:bg-white w-[30%] cursor-pointer"
          />
        </div>
      </Modal>
    </>
  );
}
