import Footer from "@/components/navigation/Footer";
import NavbarGeneral from "@/components/navigation/NavbarGeneral";

export default function Contact() {
  return (
    <>
      <NavbarGeneral namePage="Contacto" />
      <div className="w-[80%] mx-auto h-auto flex flex-col mt-10 space-y-5">
        <div className="flex flex-col space-x-0 space-y-2 md:space-y-0 md:flex-row md:space-x-5">
          <div className="flex flex-col w-[100%] md:w-[50%] space-y-1">
            <label className="label" htmlFor="">
              Nombres
            </label>
            <input className="input w-[100%]" type="text" />
          </div>
          <div className="flex flex-col w-[100%] md:w-[50%] space-y-1">
            <label className="label" htmlFor="">
              Apellidos
            </label>
            <input className="input" type="text" />
          </div>
        </div>
        <div className="flex flex-col space-x-0 space-y-2 md:space-y-0 md:flex-row md:space-x-5">
          <div className="flex flex-col w-[100%] md:w-[50%] space-y-1">
            <label className="label" htmlFor="">
              Correo electrónico
            </label>
            <input className="input" type="email" />
          </div>
          <div className="flex flex-col w-[100%] md:w-[50%] space-y-1">
            <label className="label" htmlFor="">
              Celular
            </label>
            <input className="input" type="number" />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="label" htmlFor="">
            Déjanos un mensaje
          </label>
          <textarea
            maxLength={200}
            className="border-transparent focus:border-transparent focus:shadow-md focus:ring-0 rounded-md p-3 h-[100px] placeholder:text-gray-400 resize-none"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <input
            className="flex justify-center items-center text-white font-bold rounded-md hover:scale-110 duration-300 bg-[#6D9773] w-[50%] md:w-[20%] p-1"
            type="submit"
            value="Enviar"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
