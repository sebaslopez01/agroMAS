import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-evenly h-screen lg:items-end">
        {/* Phrase */}
        <div className="flex justify-center items-center flex-1 w-[100%] p-5 text-center mt-12 lg:w-[60%] xl:text-left lg:items-end">
          <h1
            id="phrase"
            className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            ¡La mejor forma de apoyar el campo!
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex w-[100%] flex-col items-center justify-center space-y-4 lg:w-[60%] lg:h-[40%]">
          <Link
            id="card"
            href="marketplace"
            className="w-[80%] p-3 text-xl text-white rounded-2xl text-center md:text-2xl lg:text-2xl lg:p-4 lg:w-[50%]"
          >
            Compra ahora
          </Link>
          <Link
            id="card"
            href="nosotros"
            className="w-[80%] p-3 text-xl text-white rounded-2xl text-center md:text-2xl lg:text-2xl lg:p-4 lg:w-[50%]"
          >
            Saber mas
          </Link>
        </div>

        <div className="w-full h-[100px] bg-[url('/down-arrow.png')] scale-150 bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
}
