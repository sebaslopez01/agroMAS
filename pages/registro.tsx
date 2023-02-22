import Footer from "@/components/navigation/Footer";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Link from "next/link";

export default function Registro() {
  return (
    <>
      <NavBarMarket />
      <div className="w-[100%] lg:w-[80%] mx-auto mt-5 flex flex-col items-center justify-center p-3 space-y-5">
        <h1 className="text-3xl font-bold text-gray-700">Registro</h1>

        <div className="w-[100%] md:w-[90%] lg:w-[80%] flex flex-col space-y-5">

          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row w-full h-auto md:space-x-5 ">
            <div className="w-[80%] md:w-[50%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Nombres
              </label>
              <input className="input" type="text" />
            </div>
            <div className="w-[80%] md:w-[50%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Apellidos
              </label>
              <input className="input" type="text" />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row w-full h-auto md:space-x-5 ">
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Tipo de documento
              </label>
              <select
                name="idTypes"
                id="ids"
                required
                className="input cursor-pointer"
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
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label
                htmlFor="nId"
                className="label"
              >
                Nº de documento
              </label>
              <input className="input" type="number" />
            </div>
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Celular
              </label>
              <input className="input" type="number" />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row w-full h-auto md:space-x-5 ">
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Registrarse como:
              </label>
              <select
                name="rol"
                id="roles"
                required
                className="input cursor-pointer"
              >
                <option value="seleccionar" selected>
                  Seleccionar
                </option>
                <option value="buyer">Cliente</option>
                <option value="seller">Vendedor</option>
              </select>
            </div>
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Departamento
              </label>
              <select
                name="departamentos"
                id="state"
                required
                className="input cursor-pointer"
              >
                <option value="seleccionar" selected>
                  Seleccionar
                </option>
                <option value="antioquia">Antioquia</option>
              </select>
            </div>
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Ciudad
              </label>
              <select
                name="ciudades"
                id="city"
                required
                className="input cursor-pointer"
              >
                <option value="seleccionar" selected>
                  Seleccionar
                </option>
                <option value="bello">Bello</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row w-full h-auto md:space-x-5 ">
            <div className="w-[80%] md:w-[50%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Correo electrónico
              </label>
              <input className="input" type="email" placeholder="email@ejemplo.com" />
            </div>
            <div className="w-[80%] md:w-[50%] flex flex-col space-y-2">
              <label
                htmlFor=""
                className="label"
              >
                Contraseña
              </label>
              <input className="input" type="password" />
            </div>
          </div>
    
        </div>

        <div className="w-[80%] space-x-2 md:space-x-1 flex md:items-center">
          <input
            required
            className="rounded-sm md:rounded-md border-none checked:bg-green-900 cursor-pointer focus:border-transparent focus:shadow-lg focus:ring-0"
            type="checkbox"
          />
          <label className="text-sm md:text-lg" htmlFor="">
            He leído y acepto los{" "}
            <Link
              className="underline hover:text-gray-500 duration-200"
              href="policy"
            >
              términos y condiciones.
            </Link>
          </label>
        </div>
        <input
          type="submit"
          value="Registrarse"
          className="p-1 bg-[#6D9773] hover:scale-110 duration-500 text-white w-[40%] md:w-[20%] cursor-pointer rounded-md"
        />
      </div>
      <Footer />
    </>
  );
}
