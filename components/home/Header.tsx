import Link from "next/link";
import bg from "@/public/backgrounds/1.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-[100vh] relative">
      <Image
        className="w-[100%] h-[100%] object-cover absolute"
        src={bg}
        alt="background-home"
      ></Image>

      <div
        // id="glass-bg"
        className="w-[92%] mx-auto lg:w-[47%] h-[100%] rounded-b-3xl flex flex-col relative lg:ml-5"
      >
        <div className="w-[90%] lg:w-[90%] h-[50%] lg:h-[70%] mx-auto flex flex-col justify-end lg:justify-end items-center">
          {/* Phrase */}
          <div className="w-full flex flex-col justify-center items-start text-7xl md:text-8xl 2xl:text-9xl lg:px-0">
            <span id="phrase" className="text-white font-bold">
              El
            </span>
            <span id="phrase" className="text-white font-bold">
              campo
            </span>
            <span id="phrase" className="text-white font-bold">
              más cerca
            </span>
          </div>
        </div>
        {/* Buttons */}
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-start space-y-4 lg:space-y-0 lg:space-x-5 mt-5">
          <Link
            className="w-[100%] lg:w-[37%] h-[50px] border-2 border-white text-white hover:scale-110 duration-500 flex justify-center items-center text-lg md:text-xl font-medium rounded-md"
            href="/#category"
          >
            Saber más
          </Link>
          <Link
            className="w-[100%] lg:w-[37%] h-[50px] bg-white border-white hover:scale-110 duration-500 text-black flex justify-center items-center text-lg md:text-xl font-medium rounded-md"
            href="marketplace"
          >
            Comprar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
