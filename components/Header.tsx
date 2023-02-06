import Image from "next/image"
import Link from "next/link"
import NavBar from "./NavBar"

export default function Header({ children }: any) {
    return (
        <div className="bg-[url('/background.jpg')] bg-cover h-screen bg-fixed">
            <NavBar></NavBar>
            <div className="flex flex-col items-end justify-center h-[100%] space-y-14">
                <div className="w-[60%] mt-36">
                    <span id="phrase" className="text-8xl text-white">¡La mejor forma de apoyar el campo!</span>
                </div>
                <div className="flex w-[50%] space-x-14 ml-12 mr-0 items-end p-10">
                    <Link href="marketplace" className="bg-green-800 p-5 text-3xl text-white rounded-tl-3xl rounded-br-3xl">
                        <button className="w-60">Compra ahora</button>
                    </Link>
                    <Link href="nosotros" className="bg-green-800 p-5 text-3xl text-white rounded-tl-3xl rounded-br-3xl">
                        <button className="w-60">Saber más</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}