import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex bg-green-700">
      {/* Phrase */}
      <div className="flex w-2/3 h-40 justify-center items-center">
        <span className="text-white text-xl font-bold">Una frase aquí</span>
      </div>

      {/* Contact */}
      <div className="flex flex-col justify-center items-center w-1/3 h-40 text-white text-xl border-l-2">
        <Link href="contact">Contacto</Link>
        <Link href="policy">Políticas</Link>
        <span>Redes</span>
      </div>
    </div>
  );
}
