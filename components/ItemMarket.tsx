import Image from "next/image";

export default function ItemMarket() {
  return (
    <>
      <div className="flex h-96 w-96 flex-col m-5">

        {/* Product image */}
        <div className="flex h-80 w-96 bg-[url('/pera.jpg')] bg-cover rounded-xl absolute"></div>

        {/* Product description */}
        <div id="card" className="flex h-contain w-[95%] mt-[60%] rounded-xl flex-col relative self-center">
          <span className="mt-2 px-3 text-4xl font-semibold blur-none">Pera dulce</span>

          {/* Location */}
          <div className="flex flex-row items-center mt-3">
            <Image className="mr-2 ml-3" src="/location.png" alt="location-icon" width={20} height={20} />
            <span className="">Medellín, Antioquia</span>
          </div>

          <div className="flex flex-row px-2 my-5 justify-center items-center">

            {/* Price */}
            <div className="h-10 w-2/5 p-1">
              <span className="text-2xl">$1.500 Kg</span>
            </div>

            {/* Counter Buttons */}
            <div className="flex h-10 w-2/5 justify-evenly items-center mr-2">
              <button className="flex items-center justify-center h-10 w-[33%] bg-red-400  rounded-l-xl text-white text-4xl">-</button>
              <input className="flex items-center justify-center h-10 w-[33%] bg-white text-2xl text-center box-border focus:outline-none" type="text" defaultValue={0} maxLength={2} />
              <button className="flex items-center justify-center h-10 w-[33%] bg-red-400 rounded-r-xl text-white text-4xl">+</button>
            </div>

            {/* Cart Button */}
            <button className="flex h-10 w-1/5 bg-red-400 rounded-xl items-center">
              <img className="scale-50" src="addtocart.png" alt="add-icon" />
            </button>

          </div>
        </div>
      </div>
    </>
  )
}