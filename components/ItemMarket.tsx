import Meta from "./Meta";
import Image from "next/image";

export default function ItemMarket () {
    return (
        <>
          <div className="flex h-96 w-96 flex-col">
            <div className="flex h-80 w-96 bg-[url('/pera.jpg')] bg-cover rounded-xl absolute"></div>
            <div id="card" className="flex h-contain w-[95%] mt-[60%] rounded-xl flex-col relative self-center">
                <span className="mt-2 px-3 text-4xl font-semibold blur-none">Pera dulce</span>
                <div className="flex flex-row items-center ">
                  <img className="scale-50" src="location.png" alt="location-icon" />
                  <span className="">Medellín, Antioquia</span>
                </div>
                <div className="flex flex-row px-2 my-2">
                  <div className="flex h-10 w-2/5 p-2 rounded-bl-xl justify-center">
                    <span className="text-2xl">$1.500 KG</span>
                  </div>
                  <div id="counter" className="flex h-10 px-1 w-2/5">
                    <div id="increment" className="flex w-1/3 bg-red-400 rounded-l-xl justify-center">
                      <span className="text-3xl text-white font-bold">+</span>
                    </div>
                    <div className="flex w-1/3 bg-white justify-center py-2">
                      <span className="text-2xl">0</span>
                    </div>
                    <div id="decrement" className="flex w-1/3 bg-red-400 rounded-r-xl justify-center">
                      <span className="text-3xl text-white font-bold">-</span>
                    </div>
                  </div>
                    <div id="addToCart" className="flex h-10 w-1/5 bg-red-400 rounded-xl items-center">
                    <img className="scale-50" src="addtocart.png" alt="add-icon" />
                  </div>
                </div>
              </div>
          </div>
        </>
    )
}