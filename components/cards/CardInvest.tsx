import Avatar from "../Avatar";
import Image from "next/image";
import InvestDetail from "./InvestDetail";
import Meta from "../Meta";

export default function CardInvest() {
  return (
    <>
      <Meta />
      <div
        id="glass-bg"
        className=" h-fit w-[100%] md:w-[80%] lg:w-[47%] xl:w-[32%] rounded-xl m-2 p-1 mx-10"
      >
        <div className="flex flex-col justify-center items-center">
        <Avatar />
          <div className="flex flex-col justify-center items-center m-2 w-[90%]">
            <span className="text-3xl font-semibold text-gray-700">María Pérez</span>
            <div className="flex flex-row justify-start">
              <Image
                src="/loc.png"
                alt="location"
                height={1}
                width={30}
                className="scale-75"
              ></Image>
              <span className="text-xl text-gray-700">Cali, Valle</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] mb-5 mx-auto">
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptatibus sapiente modi totam rem! Recusandae quo rerum tempora
            delectus fuga minima voluptate, facilis culpa corrupti?
          </span>
        </div>

        {/* Conoce mas button */}
        <div className="flex w-[100%] h-10 mb-5 justify-center">
          {/* <!-- Button trigger modal --> */}
          <button  type="button" className="inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
            Conoce más
          </button>
        </div>
      </div>
    </>
  );
}
