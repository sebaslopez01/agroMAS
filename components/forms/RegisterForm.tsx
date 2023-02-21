import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterData {
  firstName: string;
  lastName: string;
  phone?: string;
  role: "buyer" | "seller";
  email: string;
  password: string;
  terms: boolean;
  remember: boolean;
}

interface RegisterFormProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
  setShowSignup: Dispatch<SetStateAction<boolean>>;
}

function RegisterForm({ setShowLogin, setShowSignup }: RegisterFormProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<RegisterData>();

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    const endpoint =
      data.role === "seller"
        ? "/api/auth/signup-seller"
        : "/api/auth/signup-buyer";

    const res = await axios.post(endpoint, data);

    if (res.status === 200) {
      setShowLogin(false);
      setShowSignup(false);
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-center pb-5 pt-3 space-y-2"
    >
      <h1 className="text-xl font-bold">Registro</h1>
      <div className="w-[80%] flex flex-col space-y-3">
        <div className="flex flex-col">
          <label>Nombres</label>
          <input
            {...register("firstName", { required: true, maxLength: 60 })}
            className="h-[30px] rounded-full border-gray-400 focus:ring focus:ring-gray-300"
            type="text"
            required
            maxLength={60}
          />
        </div>
        <div className="flex flex-col">
          <label>Apellidos</label>
          <input
            {...register("lastName", { required: true, maxLength: 60 })}
            className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            type="text"
            required
            maxLength={60}
          />
        </div>
        <div className="flex flex-col">
          <label>Celular</label>
          <input
            {...register("phone", { maxLength: 20, minLength: 7 })}
            className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            type="text"
            maxLength={20}
            minLength={7}
          />
        </div>
        <div className="flex flex-col">
          <label>Registrarte como:</label>
          <select
            {...register("role", { required: true })}
            name="rol"
            id="roles"
            required
            className="h-[30px] p-0 pl-2 text-sm rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          >
            <option value="buyer">Cliente</option>
            <option value="seller">Vendedor</option>
          </select>
        </div>
        {/* Documento */}
        {/* <div className="flex flex-col">
              <label htmlFor="">Tipo de documento</label>
              <select
                name="idTypes"
                id="ids"
                required
                className="rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
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
            </div> */}
        {/* <div className="flex flex-col">
              <label htmlFor="nId">Nº de documento</label>
              <input
                className="rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                type="text"
                placeholder="Nº de documento"
              />
            </div> */}
        <div className="flex flex-col">
          <label>Correo electrónico</label>
          <input
            {...register("email", { required: true, maxLength: 80 })}
            className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            type="email"
            required
            maxLength={80}
          />
        </div>
        <div className="flex flex-col">
          <label>Contraseña</label>
          <input
            {...register("password", { required: true, maxLength: 255 })}
            className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            type="password"
            required
            maxLength={255}
          />
        </div>
      </div>
      <div className="w-[80%] space-x-1">
        <input
          {...register("terms", { required: true })}
          className="rounded-full appearance-none checked:bg-slate-600 cursor-pointer focus:outline-none"
          type="checkbox"
          required
        />
        <label className="text-sm">
          He leído y acepto los{" "}
          <Link className="text-gray-500 underline" href="/">
            términos y condiciones
          </Link>
        </label>
      </div>
      <button
        type="submit"
        className="p-1 border border-black hover:scale-110 duration-500 hover:bg-white w-[30%]"
      >
        Registrarse
      </button>
    </form>
  );
}

export default RegisterForm;
