import Link from "next/link"

export default function Header () {
    return (
        <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen">
            <div className="flex flex-col justify-center h-screen space-y-36 lg:items-end">

                {/* Phrase */}
                <div className="w-[100%] p-5 text-center lg:w-[60%] xl:text-left">
                    <span id="phrase" className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">¡La mejor forma de apoyar el campo!</span>
                </div>

                {/* Buttons */}
                <div className="flex w-[100%] flex-col items-center justify-center space-y-4 lg:w-[60%] lg:flex-row lg:space-y-0 lg:space-x-5">
                    <Link href="marketplace" className="bg-green-800 p-3 text-xl text-white rounded-2xl text-center lg:text-2xl lg:p-4">
                        Compra ahora
                    </Link>
                    <Link href="nosotros" className="bg-green-800 p-3 text-xl text-white rounded-2xl text-center lg:text-2xl lg:p-4">
                        Saber más
                    </Link>
                </div>
            </div>
        </div>
    )
}