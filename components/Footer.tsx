import Link from "next/link"

export default function Footer () {
    return (
        <>
        <div className="flex h-72 bg-[url('/fondo2.png')] bg-cover">
            <div className="flex w-2/3 p-10 justify-center items-center">
                <span className="text-white text-8xl font-bold">
                    Una frase aquí
                </span>
            </div>
            <div className="flex w-1/3 p-10 mt-7 text-white text-5xl border-l-2 flex-col justify">
                <Link href="contact">Contacto</Link>
                <Link href="policy">Políticas</Link>
                <span>redes</span>
            </div>
        </div>
        </>
    )
}