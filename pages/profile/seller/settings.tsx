import Avatar from "@/components/Avatar";
import Meta from "@/components/Meta";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";
import Image from "next/image";
import pic from "@/public/person.jpg"

export default function Settings() {
  return (
    <>
      <Meta />
      <NavBarMarket />

      <div className="flex flex-col p-4 w-[75%] mx-auto">
        <h1 className="text-xl my-5">Configuración de la cuenta</h1>

        {/* first line */}
        <div className="flex w-[100%]">
          <Image src={pic} alt="profile pic" className="w-[20%] rounded-3xl p-1"/>
          <div className="flex flex-col w-[40%] p-1">
            <span>Nombres</span>
            <input type="text" className="border border-gray-300 rounded-full" />
          </div>

          <div className="flex flex-col w-[40%] p-1">
            <span>Apellidos</span>
            <input type="text"  className="border border-gray-300 rounded-full" />
          </div>
        </div>

        {/* second line */}
        <div className="flex w-[100%]">
          <div className="flex flex-col w-[50%] p-1">
            <span>Tipo y número de documento</span>
            <div className="flex">
              <input type="text" className="border w-[30%] mr-1 border-gray-300 rounded-full" />
              <input type="text" className="border w-[70%] ml-1 border-gray-300 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col w-[50%] p-1">
            <span>Número de teléfono</span>
            <input type="text" className="border border-gray-300 rounded-full" />
          </div>
        </div>

        {/* third line */}
        <div className="flex w-[100%] justify-between">
          <div className="flex flex-col w-[33%] p-1">
            <span>Correo electrónico</span>
            <input type="text" className="border border-gray-300 rounded-full" />
          </div>
          <div className="flex flex-col w-[33%] p-1">
            <span>Contraseña</span>
            <input type="text" className="border border-gray-300 rounded-full" />
          </div>
          <div className="flex flex-col w-[33%] p-1">
            <span>Rol</span>
            <input type="text" className="border border-gray-300 rounded-full" />
          </div>
        </div>
        
        {/* fourth line */}
        <div className="flex w-[100%]">
          <div className="flex flex-col w-[50%] p-1">
            <span>Dirección</span>
            <input type="text" className="border border-gray-300 rounded-full" />
          </div>
          <div className="flex flex-col w-[25%] p-1">
            <span>Ciudad</span>
            <input type="text" className="border border-gray-300 rounded-full" />
          </div>
          <div className="flex flex-col w-[25%] p-1">
            <span>Departamento</span>
            <input type="text" className="border border-gray-300 rounded-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
