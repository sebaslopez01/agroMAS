import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Avatar from "./Avatar"

export default function NavBar() {
    
    const [menu, setMenu] = useState(true)

    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div id="bg-Navbar" className="w-[100%] flex justify-between items-center z-50">

            {/* Nostros - Invierte */}
            <div className="w-[33%] space-x-16 pl-10 hidden lg:flex">
                <Link href="nosotros" className="text-white text-3xl font-bold">Nosotros </Link>
                <Link href="investments" className="text-white text-3xl font-bold">Invierte</Link>
            </div>

            {/* Agro logo */}
            <Link href="/"><Image className="scale-75" src="/agro-logo.png" alt="Agro-logo" width={200} height={200} /></Link>
            
            {/* Menu Icon */}
            <div className="p-5 lg:hidden text-white" onClick={handleMenu}>
                {!menu ? 'X' : '|||'}
            </div>

            {/* Menu */}
            <div className={!menu ? "fixed top-0 left-0 bg-red-200 w-[80%] h-screen p-5 ease-in-out duration-500 lg:hidden" : "fixed top-[-100%]" }>
                <div className="flex justify-between mb-5">
                    <h1 className="text-4xl font-semibold">Menú</h1>
                </div>
                <ul>
                    <li className="py-2"><Link href="profile" className="text-2xl mt-5">Iniciar sesión</Link></li>
                    <li className="py-2"><Link href="nosotros" className="text-2xl mt-5">Inicio</Link></li>
                    <li className="py-2"><Link href="nosotros" className="text-2xl mt-5">Nosotros</Link></li>
                    <li className="py-2"><Link href="investments" className="text-2xl mt-5">Invierte</Link></li>
                </ul>
            </div>

            {/* Search - Cart - User */}
            <div className="w-[33%] space-x-16 pr-10 justify-end hidden lg:flex">
                <button>
                    <img className="object-scale-down self-center" src="search-icon.png" alt="Search-icon" />
                </button>
                <Link href='marketplace' className="self-center">
                    <img className="object-scale-down" src="cart-icon.png" alt="ShoppingCart-icon" />
                </Link>
                <Link href="profile" className="scale-50">
                    <Avatar />
                </Link>
            </div>
        </div>
    )
}