import Meta from "@/components/Meta";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";
import Image from "next/image";
import pic from "@/public/perfil1.jpg";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Settings() {
  return (
    <>
      <Meta />
      <NavBarMarket />
      <div id="test" className="w-full h-52 bg-[#6d9773] p-10">
      <h1 className="text-2xl mx-auto text-center">Configuración de la cuenta</h1>
      </div>
      <Image
              src={pic}
              alt="profile pic"
              className="rounded-full z-10 w-[15%] mx-auto -mt-28"
            />

      <div className="w-[90%] mx-auto mt-10">
        {/* <h1 className="text-2xl my-5">Configuración de la cuenta</h1> */}

        <div className="flex w-[100%]">
          {/* profile picture */}
          {/* <div className="flex flex-col w-[20%]">
            <Image
              src={pic}
              alt="profile pic"
              className="rounded-xl z-10 mt-2"
            />


            <div className="w-80 bg-[#OC3B2E]/80 h-44 mt-10 rounded-r-xl absolute left-0"></div>
          </div> */}

          <div className="w-[80%] flex flex-col mx-auto">
            {/* personal data */}
            <div className="w-[100%] flex flex-col p-5 border rounded-xl border-gray-300">
              <span className="py-3 text-xl ">Mis datos personales</span>
              <div className="flex w-[100%]">
                <div className="flex flex-col w-[50%] p-1">
                  <span className="text-sm text-gray-600">Nombres</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[50%] p-1">
                  <span className="text-sm text-gray-600">Apellidos</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex flex-col w-[50%] p-1">
                  <span className="text-sm text-gray-600">
                    Tipo y número de documento
                  </span>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-[30%] mr-1 rounded-lg bg-white/30 border-gray-200"
                    />
                    <input
                      type="text"
                      className="w-[70%] ml-1 rounded-lg bg-white/30 border-gray-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-[50%] p-1">
                  <span className="text-sm text-gray-600">Teléfono</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex flex-col w-[33%] p-1">
                  <span className="text-sm text-gray-600">
                    Correo electrónico
                  </span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[33%] p-1">
                  <span className="text-sm text-gray-600">Contraseña</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[33%] p-1">
                  <span className="text-sm text-gray-600">Rol</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex flex-col w-[50%] p-1">
                  <span className="text-sm text-gray-600">Dirección</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[25%] p-1">
                  <span className="text-sm text-gray-600">Ciudad</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[25%] p-1">
                  <span className="text-sm text-gray-600">Departamnto</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
              </div>
            </div>

            {/* support */}
            <div className="w-[100%] flex flex-col p-5 border rounded-xl border-gray-300 my-2">
              <span className="py-3 text-xl ">Soporte</span>
              <div className="flex w-full space-x-2">

                {/* help */}
                <Link href="/contact" className="flex justify-between w-[50%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300">
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-help"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M12 17l0 .01"></path>
                      <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
                    </svg>
                    <span>Obtener ayuda</span>
                  </div>
                  <IconChevronRight strokeWidth={1.2} width={24} height={24} />
                </Link>

                {/* legal */}
                <Link href="/policy" className="flex justify-between w-[50%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300">
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-license"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                      <path d="M9 7l4 0"></path>
                      <path d="M9 11l4 0"></path>
                    </svg>
                    <span>Políticas de uso</span>
                  </div>
                  <IconChevronRight strokeWidth={1.2} width={24} height={24} />
                </Link>
              </div>
            </div>

            {/* my account */}
            <div className="w-[100%] flex flex-col p-5 border rounded-xl border-gray-300 my-2">
              <span className="py-3 text-xl ">Mi cuenta</span>
              <div className="flex w-full justify-between">
                {/* projects */}
                <Link href="/profile/seller/my-projects" className="flex justify-between w-[33%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300">
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-seeding"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"></path>
                      <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"></path>
                      <path d="M12 20l0 -10"></path>
                    </svg>
                    <span>Gestionar proyectos</span>
                  </div>
                  <IconChevronRight strokeWidth={1.2} width={24} height={24} />
                </Link>

                {/* products */}
                <Link href="/profile/seller/my-products" className="flex justify-between w-[33%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300">
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-building-store"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 21l18 0"></path>
                      <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                      <path d="M5 21l0 -10.15"></path>
                      <path d="M19 21l0 -10.15"></path>
                      <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                    </svg>
                    <span>Gestionar productos</span>
                  </div>
                  <IconChevronRight strokeWidth={1.2} width={24} height={24} />
                </Link>

                {/* delete account */}
                <button className="flex space-x-2 w-[33%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trash-x"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 7h16"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                    <path d="M10 12l4 4m0 -4l-4 4"></path>
                  </svg>
                  <span>Eliminar cuenta</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
