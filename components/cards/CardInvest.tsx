import Avatar from "../Avatar";
import Image from "next/image";
import InvestDetail from "./InvestDetail";

export default function CardInvest() {
  return (
    <>
      <div
        id="cardInvest"
        className=" h-fit w-[100%] md:w-[80%] lg:w-[47%] xl:w-[32%] rounded-xl m-2 p-1"
      >
        <div className="flex flex-col justify-center items-center md:flex-row">
          <Avatar />
          <div className="flex flex-col justify-center items-center m-2 w-[90%]">
            <span className="text-3xl font-medium">María Pérez</span>
            <div className="flex flex-row justify-start">
              <Image
                src="/location.png"
                alt="location"
                height={1}
                width={30}
                className="scale-75"
              ></Image>
              <span className="text-xl ">Cali, Valle</span>
            </div>
          </div>
        </div>

        <div className="w-[90%] mb-5 mx-auto">
          <span className="text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptatibus sapiente modi totam rem! Recusandae quo rerum tempora
            delectus fuga minima voluptate, facilis culpa corrupti?
          </span>
        </div>

        {/* Conoce mas button */}
        <div className="flex w-[100%] h-10 mb-5 justify-center">
          {/* <!-- Button trigger modal --> */}
          <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
            Me la pela
          </button>
        </div>
      </div>
    </>
  );
}
