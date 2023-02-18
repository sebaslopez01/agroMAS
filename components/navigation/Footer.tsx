import Link from "next/link";
import Image from "next/image";
import logoAgro from "@/public/agro-icon.ico";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="w-full flex bg-[#ECECEA] mt-10">
        <div className="w-[100%] md:w-[80%] m-auto flex flex-col justify-center items-center">
          {/* links */}
          <div className="h-auto w-[60%] my-5">
            <div className="w-full flex justify-center p-3">
              <Image
                className="w-[50px] h-[50px] object-contain"
                src={logoAgro}
                alt="Iconito"
              />
            </div>

            {/* links */}
            <div className="w-[80%] m-auto mt-2 md:mt-5">
              <ul className="flex flex-col md:flex-row justify-between text-gray-500 uppercase text-sm font-semibold text-center">
                <li className="my-1">Contacto</li>
                <li className="my-1">Políticas</li>
                <li className="my-1">Tienda</li>
                <li className="my-1">Redes</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-[90%] md:w-[70%] border-t border-gray-300 text-center py-5 pb-10">
            <span className="text-gray-500 text-xs md:text-sm">
              &copy;Copyrigth Derechos Reservados {year}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
