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

        <div className="px-5 mb-5">
          <span className="text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptatibus sapiente modi totam rem! Recusandae quo rerum tempora
            delectus fuga minima voluptate, facilis culpa corrupti?
          </span>
        </div>
      </div>
    </>
  );
}
