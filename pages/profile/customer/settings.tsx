
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";
import Image from "next/image";
import pic from "@/public/perfil1.jpg";
import Link from "next/link";
import { IconChevronRight, IconHelp, IconLicense, IconTrashX, IconTimeline, IconReceipt } from "@tabler/icons-react";

export default function CustomerSettings() {
  return (
    <>
      <NavBarMarket />
      <div
        // id="test"
        className="w-full h-24 rounded-b-xl md:h-36 lg:h-40 xl:h-40 bg-[#6d9773]"
      ></div>
      <Image
        src={pic}
        alt="profile pic"
        className="rounded-full w-[30%] md:w-[25%] lg:w-[15%] mx-auto -mt-20 md:-mt-28 xl:-mt-32"
      />

      <div className="w-[90%] mx-auto mt-10">
        <div className="flex w-[100%]">
          <div className=" w-[90%] lg:w-[85%] flex flex-col mx-auto">
            {/* personal data */}
            <div className="w-[100%] flex flex-col p-5 border rounded-xl border-gray-300">
              <span className="py-3 text-xl ">Mis datos personales</span>
              <div className="flex flex-col lg:flex-row w-[100%]">
                <div className="flex flex-col w-[100%] lg:w-[50%] p-1">
                  <span className="text-sm text-gray-600">Nombres</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[50%] p-1">
                  <span className="text-sm text-gray-600">Apellidos</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-[100%]">
                <div className="flex flex-col w-[100%] lg:w-[50%] p-1">
                  <span className="text-sm text-gray-600">
                    Tipo y número de documento
                  </span>
                  <div className="flex">
                    <input
                      type=""
                      disabled
                      className="w-[30%] mr-1 rounded-lg bg-white/30 border-gray-200"
                    />
                    <input
                      type="text"
                      disabled
                      className="w-[70%] ml-1 rounded-lg bg-white/30 border-gray-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-[100%] lg:w-[50%] p-1">
                  <span className="text-sm text-gray-600">Teléfono</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-[100%]">
                <div className="flex flex-col w-[100%] lg:w-[33%] p-1">
                  <span className="text-sm text-gray-600">
                    Correo electrónico
                  </span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[33%] p-1">
                  <span className="text-sm text-gray-600">Contraseña</span>
                  <input
                    type="password"
                    defaultValue="unacontraseña"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[33%] p-1">
                  <span className="text-sm text-gray-600">Rol</span>
                  <input
                    type="text"
                    disabled
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-[100%]">
                <div className="flex flex-col w-[100%] lg:w-[50%] p-1">
                  <span className="text-sm text-gray-600">Dirección</span>
                  <input
                    type="text"
                    className="rounded-lg bg-white/30 border-gray-200"
                  />
                </div>
                <div className="flex flex-col w-[100%] lg:w-[25%] p-1">
                  <span className="text-sm text-gray-600">Ciudad</span>
                  <select
                    name="Selecciona"
                    id=""
                    className="rounded-lg bg-white/30 border-gray-200"
                  ></select>
                </div>
                <div className="flex flex-col w-[100%] lg:w-[25%] p-1">
                  <span className="text-sm text-gray-600">Departamnto</span>
                  <select
                    name=""
                    id=""
                    className="rounded-lg bg-white/30 border-gray-200"
                  ></select>
                </div>
              </div>
            </div>

            {/* support */}
            <div className="w-[100%] flex flex-col p-5 border rounded-xl border-gray-300 my-2">
              <span className="py-3 text-xl ">Soporte</span>
              <div className="flex flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:space-x-2">
                {/* help */}
                <Link
                  href="/contact"
                  className="flex justify-between w-[100%] lg:w-[50%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  <div className="flex space-x-2">
                    <IconHelp className="stroke-[1px] w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />
                    <span className="text-sm lg:text-base text-gray-700">
                      Obtener ayuda
                    </span>
                  </div>
                  <IconChevronRight strokeWidth={1.2} width={24} height={24} />
                </Link>

                {/* legal */}
                <Link
                  href="/policy"
                  className="flex justify-between w-[100%] lg:w-[50%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  <div className="flex space-x-2">
                    <IconLicense className="stroke-[1px] w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />
                    <span className="text-sm lg:text-base text-gray-700">
                      Políticas de uso
                    </span>
                  </div>
                  <IconChevronRight strokeWidth={1.2} width={24} height={24} />
                </Link>
              </div>
            </div>

            {/* my account */}
            <div className="w-[100%] flex flex-col p-5 border rounded-xl border-gray-300 my-2">
              <span className="py-3 text-xl ">Mi cuenta</span>
              <div className="flex flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:justify-between">
                {/* projects */}
                <Link
                  href="/profile/seller/my-projects"
                  className="flex justify-between w-[100%] lg:w-[33%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  <div className="flex space-x-2">
                    <IconReceipt className="stroke-[1px] w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />
                    <span className="text-sm lg:text-base text-gray-700">
                      Ver mis compras
                    </span>
                  </div>
                  <IconChevronRight strokeWidth={1.2} width={24} height={24} />
                </Link>

                {/* products */}
                <Link
                  href="/profile/seller/my-products"
                  className="flex justify-between w-[100%] lg:w-[33%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  <div className="flex space-x-2">
                    <IconTimeline className="stroke-[1px] w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />
                    <span className="text-sm lg:text-base text-gray-700">
                      Ver mis inversiones
                    </span>
                  </div>
                  <IconChevronRight strokeWidth={1.2} width={24} height={24} />
                </Link>

                {/* delete account */}
                <button className="flex space-x-2 w-[100%] lg:w-[33%] px-3 py-5 rounded-lg bg-gray-200 hover:bg-gray-300">
                  <IconTrashX className="stroke-[1px] w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />
                  <span className="text-sm lg:text-base text-gray-700">
                    Eliminar cuenta
                  </span>
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
