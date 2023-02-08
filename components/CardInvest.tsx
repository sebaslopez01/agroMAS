import Avatar from "./Avatar";
import Image from "next/image";

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

        <div className="flex rounded-full w-[100%] h-10 mb-5 justify-end items-center">
          <button className="flex text-white text-xl lg:font-medium bg-red-400 h-10 w-[50%] m-5 rounded-full justify-center items-center">
            <span >
              Conoce más
            </span>
          </button>
        </div>

        {/* progress bar */}
        {/* <div className="flex mb-6 flex-row items-center justify-center">
          <div className="w-[80%] bg-gray-200 h-5 rounded-xl">
            <div className="bg-red-400 h-5 w-[65%] rounded-xl"></div>
          </div>
          <div className="w-[10%] text-center">
            <span className="font-semibold text-lg">65%</span>
          </div>
        </div> */}
      </div>
    </>
  );
}
