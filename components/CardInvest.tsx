import Avatar from "./Avatar";
import Image from "next/image";

export default function CardInvest() {
  return (
    <>
      <div id="cardInvest" className="h-fit w-[33%] rounded-xl">
        <div className="flex flex-row">
          <Avatar />
          <div className="flex flex-col justify-center">
            <span className="text-5xl font-medium">María Pérez</span>
            <div className="flex flex-row">
              <Image src='/location.png' alt="location" height={5} width={30}></Image>
              <span className="text-2xl">Cali, Valle</span>
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

        <div className="flex mb-6 flex-row items-center justify-center">
          <div className="w-[80%] bg-gray-200 h-5 rounded-xl">
            <div className="bg-red-400 h-5 w-[65%] rounded-xl"></div>
          </div>
          <div className="w-[10%] text-center">
            <span className="font-semibold text-lg">65%</span>
          </div>
        </div>
      </div>
    </>
  );
}
