import Image from "next/image";
import test from "@/public/backgrounds/1.jpg";

export default function ProfileInvest() {
  return (
    <>
      <div className="w-full h-auto rounded-3xl rounded-br-none lg:rounded-br-3xl lg:rounded-tr-none bg-white shadow-lg flex flex-col lg:flex-row space-y-5 lg:space-y-0">
        {/* Image */}
        <div className="w-[100%] lg:h-[520px] lg:w-[50%]">
          <Image
            src={test}
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-3xl rounded-tl-none lg:rounded-tl-3xl lg:rounded-br-3xl rounded-br-none lg:rounded-tr-none lg:rounded-bl-none"
          />
        </div>

        {/* Description */}
        <div className="w-[100%] lg:w-[50%] lg:h-full flex flex-col space-y-4 md:space-y-6 p-5 lg:pb-0 ">
          <h1 className="text-lg md:text-2xl font-bold">Cañas gordas</h1>
          <h2 className="text-md md:text-lg font-semibold">Patricia Terán</h2>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            dolorem delectus ex? Tempore, illo! Sequi aliquid dolor eum autem?
            Nemo cum iste dolores quam atque, soluta porro dolore officia est!
          </p>
          <div className="w-full h-auto flex justify-between md:justify-evenly">
            <div className="p-5 rounded-full shadow-lg">15%</div>
            <div className="p-5 rounded-full shadow-lg">150</div>
            <div className="p-5 rounded-full shadow-lg">Aro</div>
          </div>
          <div className="w-full h-auto flex flex-col">
            <span className="md:text-lg font-bold text-gray-600">
              Progreso de inversión
            </span>
            <div className="w-full h-auto flex items-center justify-between">
              <div className="w-[80%] h-[10px] md:h-[13px] rounded-xl bg-gray-200">
                <div className="w-[80%] h-full rounded-xl bg-[#6D9773]"></div>
              </div>
              <span className="w-[10%] font-bold md:text-lg">80%</span>
            </div>
          </div>
          <div className="w-full h-auto flex justify-between">
            <div className="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-pin w-[19px] h-[19px] md:w-[21px] md:h-[21px]"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
              <span className="text-md font-bold md:text-lg">
                Medellín, Antioquia
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
