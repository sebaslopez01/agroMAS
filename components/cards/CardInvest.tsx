import Avatar from "../Avatar";
import Image from "next/image";
import Meta from "../Meta";
import ModalCard from "@/components/modals/ModalCardInvest";
import { Carousel } from "flowbite-react";
import img1 from "@/public/backgrounds/1.jpg";
import img2 from "@/public/backgrounds/2.jpg";
import img3 from "@/public/backgrounds/3.jpg";
import Link from "next/link";
export default function CardInvest() {
  return (
    <>
      <Meta />
      <div className="h-[400px] xl:h-[500px] 2xl:h-[600px] w-full">
        <Carousel className="shadow-2xl">
          <div className="flex h-full items-center justify-center relative">
            <Image
              src={img1}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
            <div id="glass-bg" className="absolute top-2 left-2 rounded-md p-1 xl:p-3">
              <h2 className="text-white text-lg font-bold xl:text-xl">Frontino, proyecto</h2>
            </div>
            <Link
              href="/investments"
              className="bg-white absolute bottom-12 right-[50%] translate-x-[50%] rounded-md font-medium text-black xl:p-3 xl:text-xl hover:scale-110 duration-300 p-2 flex justify-center items-center shadow-xl"
            >
              Conoce más
            </Link>
          </div>
          <div className="flex h-full items-center justify-center relative">
            <Image
              src={img2}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
            <div id="glass-bg" className="absolute top-2 left-2 rounded-md p-1 xl:p-3">
              <h2 className="text-white text-lg font-bold xl:text-xl">Guarne, proyecto</h2>
            </div>
            <Link
              href="/investments"
              className="bg-white absolute bottom-12 right-[50%] translate-x-[50%] rounded-md font-medium text-black xl:p-3 xl:text-xl hover:scale-110 duration-300 p-2 flex justify-center items-center shadow-xl"
            >
              Conoce más
            </Link>
          </div>
          <div className="flex h-full items-center justify-center relative">
            <Image
              src={img3}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
            <div id="glass-bg" className="absolute top-2 left-2 rounded-md p-1 xl:p-3">
              <h2 className="text-white text-lg font-bold xl:text-xl">Gómez Plata, proyecto</h2>
            </div>
            <Link
              href="/investments"
              className="bg-white absolute bottom-12 right-[50%] translate-x-[50%] rounded-md font-medium text-black xl:p-3 xl:text-xl hover:scale-110 duration-300 p-2 flex justify-center items-center shadow-xl"
            >
              Conoce más
            </Link>
          </div>
        </Carousel>
      </div>
    </>
  );
}
