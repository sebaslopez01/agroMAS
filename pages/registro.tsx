import Footer from "@/components/navigation/Footer";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Link from "next/link";

export default function Registro() {
  return (
    <>
      <NavBarMarket />
      <div className="w-[80%] mx-auto mt-5 flex flex-col items-center justify-center p-3 bg-blue-300">
        <h1 className="text-xl font-bold">Registro</h1>
        <div className="w-[80%] flex flex-col space-y-3 bg-orange-200">
          <div className="flex flex-col">
            <label htmlFor="">Nombres</label>
            <input
              className="h-[30px] border-gray-400 focus:ring focus:ring-gray-300"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Apellidos</label>
            <input
              className="h-[30px] border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Celular</label>
            <input
              className="h-[30px] border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Registrarte como:</label>
            <select
              name="rol"
              id="roles"
              required
              className="h-[30px] p-0 pl-2 text-sm border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            >
              <option value="seleccionar" selected>
                Seleccionar
              </option>
              <option value="buyer">Cliente</option>
              <option value="seller">Vendedor</option>
            </select>
          </div>
          {/* Documento */}
          <div className="flex flex-col">
            <label htmlFor="">Tipo de documento</label>
            <select
              name="idTypes"
              id="ids"
              required
              className="h-[30px] p-0 pl-2 text-sm border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            >
              <option className="cursor-pointer" value="seleccionar" selected>
                Seleccionar
              </option>
              <option className="cursor-pointer" value="cedula">
                Cédula de Ciudadanía
              </option>
              <option className="cursor-pointer" value="tarjetaDeIdentidad">
                Cédula de Extranjería
              </option>
              <option className="cursor-pointer" value="Contraseña">
                Pasaporte
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="nId">Nº de documento</label>
            <input
              className="h-[30px] text-sm border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              type="text"
              placeholder="Nº de documento"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Correo electrónico</label>
            <input
              className="h-[30px] border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Contraseña</label>
            <input
              className="h-[30px] border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              type="password"
            />
          </div>
        </div>
        <div className="w-[80%] space-x-1">
          <input
            className="appearance-none checked:bg-slate-600 cursor-pointer focus:outline-none"
            type="checkbox"
          />
          <label className="text-sm" htmlFor="">
            He leído y acepto los{" "}
            <Link className="text-gray-500 underline" href="/">
              términos y condiciones
            </Link>
          </label>
        </div>
        <input
          type="submit"
          value="Registrarse"
          className="p-1 border border-black hover:scale-110 duration-500 hover:bg-white w-[30%] cursor-pointer"
        />
      </div>
      <Footer />
    </>
  );
}
