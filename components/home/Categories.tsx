import Link from "next/link";
import Image from "next/image";

import category1 from "@/public/categoryImages/1.1.jpg";
import category2 from "@/public/categoryImages/8.jpg";

export default function Categories() {
  return (
    <>
      <div className="flex my-3 w-[50%] lg:w-[70%] mx-auto p-4">
        <h1
          id="phrase"
          className="text-5xl lg:text-2xl text-center text-gray-300"
        >
          ¿Qué hacemos?
        </h1>
      </div>

      <div className="w-full lg:w-[80%] h-auto space-y-10 lg:space-y-0 flex flex-col justify-center mx-auto">
        {/* Mercado virtual */}
        <div className="flex justify-end w-full h-[500px]">
          <div className="w-full lg:w-[90%] h-full flex flex-col lg:flex-row justify-center items-center">
            <div
              id="glass-bg"
              className="w-[90%] h-full lg:w-[60%] md:w-[70%] lg:h-[60%] rounded-3xl shadow-lg p-7 lg:p-10 flex flex-col justify-between space-y-3 lg:space-y-0"
            >
              <div className="w-full mx-auto lg:w-[40%] h-[50%] md:h-[60%] md:w-full rounded-3xl lg:hidden">
                <Image
                  src={category1}
                  className="shadow-lg w-full h-full lg:h-[80%] object-cover rounded-3xl"
                  alt=""
                />
              </div>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-green-500 text-2xl lg:text-4xl font-bold">
                Mercado virtual
              </h2>
              <p className="text-gray-500 text-md lg:text-lg">
                Un sitio para el beneficio tanto del consumidor como de los
                campesinos. Un mercado con precios justos donde compras sin
                intermediarios.
              </p>
              <Link
                className="w-[60%] mx-auto lg:mx-0 md:w-[50%] lg:w-[37%] h-[40px] lg:h-[50px] border border-green-900 hover:scale-110 duration-500 text-black flex justify-center items-center text-md lg:text-lg font-medium rounded-md"
                href="marketplace"
              >
                Comprar ahora
              </Link>
            </div>
            <div className="w-[40%] h-[80%] rounded-3xl -ml-10 hidden lg:block">
              <Image
                src={category1}
                className="shadow-lg w-full h-full object-cover rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Inversion */}
        <div className="flex justify-start w-full h-[500px]">
          <div className="w-full lg:w-[90%] h-full flex flex-col lg:flex-row justify-center items-center">
            <div className="w-[60%] lg:w-[40%] h-[80%] -mb-10 lg:mb-0 rounded-3xl">
              <Image
                src={category2}
                className="shadow-lg w-full h-[80%] lg:h-full object-cover rounded-3xl hidden lg:block"
                alt=""
              />
            </div>
            <div
              id="glass-bg"
              className="w-[90%] lg:w-[60%] h-full lg:h-[60%] md:w-[70%] rounded-3xl shadow-lg lg:-ml-10 p-7 lg:p-10 flex flex-col justify-between space-y-3 lg:space-y-0"
            >
              <div className="w-full mx-auto lg:w-[40%] h-[50%] md:h-[60%] rounded-3xl lg:-ml-10 lg:hidden">
                <Image
                  src={category2}
                  className="shadow-lg w-full h-full lg:h-[80%] object-cover rounded-3xl"
                  alt=""
                />
              </div>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-green-500 text-2xl lg:text-4xl font-bold">
                Plataforma de inversión
              </h2>
              <p className="text-gray-500 text-md lg:text-lg">
                Un sitio para el beneficio tanto del consumidor como de los
                campesinos. Un mercado con precios justos donde compras sin
                intermediarios.
              </p>
              <Link
                className="w-[60%] mx-auto md:w-[50%] lg:mx-0 lg:w-[37%] h-[40px] lg:h-[50px] border border-green-900 hover:scale-110 duration-500 text-black flex justify-center items-center text-md lg:text-lg font-medium rounded-md"
                href="/investments"
              >
                Invierte ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
