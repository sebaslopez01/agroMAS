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
        <h1 className="text-xl my-5">Configuración de la cuenta</h1>

        <div className="flex w-[100%]">
          {/* profile picture */}
          <div className="flex flex-col w-[20%] p-1">
            <Image src={pic} alt="profile pic" className="rounded-3xl p-1" />
            <span>Vendedor</span>
          </div>

          {/* personal data */}
          <div className="w-[80%] flex flex-col pt-1 ml-5">
            <div className="flex w-[100%]">
              <div className="flex flex-col w-[50%] p-1">
                <span>Nombres</span>
                <input type="text" />
              </div>
              <div className="flex flex-col w-[50%] p-1">
                <span>Apellidos</span>
                <input type="text" />
              </div>
            </div>
            
            <div className="flex w-[100%]">
              <div className="flex flex-col w-[50%] p-1">
                <span>Tipo y número de documento</span>
                <div className="flex">
                <input type="text" className="w-[30%] mr-1"/>
                <input type="text" className="w-[70%] ml-1"/>
                </div>
              </div>
              <div className="flex flex-col w-[50%] p-1">
                <span>Teléfono</span>
                <input type="text" />
              </div>
            </div>

            <div className="flex w-[100%]">
              <div className="flex flex-col w-[33%] p-1">
                <span>Correo electrónico</span>
                <input type="text" />
              </div>
              <div className="flex flex-col w-[33%] p-1">
                <span>Contraseña</span>
                <input type="text" />
              </div>
              <div className="flex flex-col w-[33%] p-1">
                <span>Rol</span>
                <input type="text" />
              </div>
            </div>

            <div className="flex w-[100%]">
              <div className="flex flex-col w-[50%] p-1">
                <span>Dirección</span>
                <input type="text" />
              </div>
              <div className="flex flex-col w-[25%] p-1">
                <span>Ciudad</span>
                <input type="text" />
              </div>
              <div className="flex flex-col w-[25%] p-1">
                <span>Departamnto</span>
                <input type="text" />
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
