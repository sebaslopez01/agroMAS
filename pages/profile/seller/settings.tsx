import Avatar from "@/components/Avatar";
import Meta from "@/components/Meta";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";
import Image from "next/image";
import pic from "@/public/person.jpg";

export default function Settings() {
  return (
    <>
      <Meta />
      <NavBarMarket />

      <div className="w-[90%] mx-auto">
        <h1 className="text-2xl my-5">Configuración de la cuenta</h1>

        <div className="flex w-[100%]">
          {/* profile picture */}
          <div className="flex flex-col w-[20%]">
            <Image src={pic} alt="profile pic" className="rounded-xl z-10 mt-2" />
            <div className="flex w-full justify-between my-1 z-10">
              <button className="border border-gray-300 rounded-lg h-7 text-gray-300 w-[49%]">
                Editar
              </button>
              <button className="border border-gray-300 rounded-lg h-7 text-gray-300 w-[49%]">
                Eliminar
              </button>
            </div>
            {/* <div className="w-80 bg-green-500 h-72 rounded-r-xl absolute left-0"></div> */}
          </div>

          <div className="w-[80%] flex flex-col ml-5">
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
            <div className="w-[100%] flex flex-col p-5 border rounded-xl border-gray-300 my-1">
              <span className="py-3 text-xl ">Soporte</span>
              <div className="flex w-full">
                <div className="w-[50%] px-3 py-5 rounded-lg bg-gray-200 mr-1">
                  Obtener ayuda
                </div>
                <div className="w-[50%] px-3 py-5 rounded-lg bg-gray-200 ml-1">
                  Políticas de uso
                </div>
              </div>
            </div>
            <div className="w-[100%] flex flex-col p-5 border rounded-xl border-gray-300 my-1">
              <span className="py-3 text-xl ">Mi cuenta</span>
              <div className="flex w-full justify-between">
                <div className="w-[30%] px-3 py-5 rounded-lg bg-gray-200">
                  Gestionar proyectos
                </div>
                <div className="w-[30%] px-3 py-5 rounded-lg bg-gray-200">
                  Gestionar productos
                </div>
                <div className="w-[30%] px-3 py-5 rounded-lg bg-gray-200">
                  Eliminar cuenta
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*content closing tag  */}
      </div>
      {/* closing tag parent container */}

      <Footer />
    </>
  );
}
