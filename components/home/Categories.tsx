import category1 from "@/public/categoryImages/2.jpg";
import category2 from "@/public/categoryImages/8.jpg";
import Link from "next/link";

import Image from "next/image";

export default function Categories() {
  return (
    <>
      <div
        id="glass-bg"
        className="flex mt-3 w-[30%] px-20 -mb-20 z-10 bg-green-900 rounded-r-xl "
      >
        <h1
          id="phrase"
          className="text-5xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-green-500"
        >
          ¿Qué hacemos?
        </h1>
      </div>
      <div className="flex justify-end items-center w-[90%] h-72 px-10 bg-[#4c8655] rounded-r-xl mt-10 mb-10">
        <div className="flex flex-col px-10 text-gray-100 space-y-5">
          <span className="text-2xl font-semibold">Mercado Virtual</span>
          <span className="text-lg">
            Un sitio para el beneficio tanto del consumidor como de los
            campesinos. Un mercado con precios justos donde compras sin
            intermediarios.
          </span>
        </div>
        <Image
          src={category1}
          className="shadow-lg w-[40%] h-[160%] object-bottom object-cover rounded-xl"
          alt=""
        />
      </div>

      <div className=" h-36"></div>

      {/* investment platform */}
      {/* <div id="glass-bg" className="flex mt-3 w-[30%] px-20 -mb-14 z-10 bg-gray-100 rounded-l-xl ml-auto mr-0">
        <h1
          id="phrase"
          className="text-right text-5xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-green-500"
        >
          ¿Qué hacemos?
        </h1>
      </div> */}

      <div className="flex items-center w-[90%] h-72 px-10 bg-[#4c8655] rounded-l-xl mt-10 mb-10 ml-auto mr-0">
        <Image
          src={category1}
          className="shadow-lg w-[40%] h-[160%] object-cover rounded-xl"
          alt=""
        />
        <div className="flex flex-col px-10 text-gray-100 space-y-5">
          <span className="text-2xl font-semibold">Mercado Virtual</span>
          <span className="text-lg">
            Un sitio para el beneficio tanto del consumidor como de los
            campesinos. Un mercado con precios justos donde compras sin
            intermediarios.
          </span>
        </div>
      </div>

      <div className=" h-36"></div>

      <div className="w-[100%] lg:w-[80%] h-auto space-y-10 lg:space-y-0 flex flex-col justify-center mx-auto">
        {/* Mercado virtual */}
        {/* <div className="flex justify-end w-[100%] h-[500px]">
          <div className="w-[100%] lg:w-[90%] h-full flex flex-col lg:flex-row justify-center items-center">
            <div
              id="glass-bg"
              className="w-[90%] h-[100%] lg:w-[60%] md:w-[70%] lg:h-[60%] rounded-3xl shadow-lg p-7 lg:p-10 flex flex-col justify-between space-y-3 lg:space-y-0"
            >
              <div className="w-[100%] mx-auto lg:w-[40%] h-[50%] md:h-[60%] md:w-[100%] rounded-3xl lg:hidden">
                <Image
                  src={category1}
                  className="shadow-lg w-[100%] h-[100%] lg:h-[80%] object-cover rounded-3xl"
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
                className="shadow-lg w-[100%] h-[100%] object-cover rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div> */}

        {/* Inversion */}
        {/* <div className="flex justify-start w-[100%] h-[500px]">
          <div className="w-[100%] lg:w-[90%] h-full flex flex-col lg:flex-row justify-center items-center">
            <div className="w-[60%] lg:w-[40%] h-[80%] -mb-10 lg:mb-0 rounded-3xl">
              <Image
                src={category2}
                className="shadow-lg w-[100%] h-[80%] lg:h-[100%] object-cover rounded-3xl hidden lg:block"
                alt=""
              />
            </div>
            <div
              id="glass-bg"
              className="w-[90%] lg:w-[60%] h-[100%] lg:h-[60%] md:w-[70%] rounded-3xl shadow-lg lg:-ml-10 p-7 lg:p-10 flex flex-col justify-between space-y-3 lg:space-y-0"
            >
              <div className="w-[100%] mx-auto lg:w-[40%] h-[50%] md:h-[60%] rounded-3xl lg:-ml-10 lg:hidden">
                <Image
                  src={category2}
                  className="shadow-lg w-[100%] h-[100%] lg:h-[80%] object-cover rounded-3xl"
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
                href="investments"
              >
                Invierte ahora
              </Link>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
