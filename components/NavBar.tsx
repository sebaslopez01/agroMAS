import Link from "next/link"

export default function NavBar () {
    return (
        <div id="bk" className="w-[100%] flex flex-row justify-between items-center px-5 h-32">
                <div className="flex w-[33%] space-x-16 pl-10">
                    <Link href="nosotros" className="text-white text-3xl font-bold mt-5">Nosotros </Link>
                    <Link href="investments" className="text-white text-3xl font-bold mt-5">Invierte</Link>
                </div>
                <Link href="/"><img className="w-48 h-48 object-contain" src="agro-logo.png" alt="Agro-logo" /></Link>
                <div className="flex w-[33%] space-x-16 pr-10 justify-end">
                    <button>
                        <img className="object-scale-down self-center" src="search-icon.png" alt="Search-icon" />
                    </button>
                    <Link href='marketplace' className="self-center">
                        <img className="object-scale-down" src="cart-icon.png" alt="ShoppingCart-icon" />
                    </Link>
                    <Link href="profile" className="flex bg-black h-20 w-20 rounded-full" >
                        <img className="object-scale-down justify-self-center" src="user-icon.png" alt="User-icon" />
                    </Link>
                </div>
            </div>
    )
}