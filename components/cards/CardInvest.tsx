import Avatar from "../Avatar";
import Image from "next/image";
import Meta from "../Meta";
import ModalCard from "@/components/modals/modalCardInvest";

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
            <span className="text-3xl font-semibold text-gray-700">
              María Pérez
            </span>
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
        <div className="flex w-[100%] h-[80px] justify-center items-center">
          <ModalCard />
        </div>
      </div>
    </>
  );
}
