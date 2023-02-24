import axios from "axios";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}

interface LoginFormProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

function LoginForm({ setShowLogin }: LoginFormProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const res = await axios.post("/api/auth/signin", data);

    if (res.status === 200) {
      setShowLogin(false);

      router.push(router.asPath);
    }
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-center pb-10 pt-5 space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-xl font-bold">Iniciar sesión</h1>
      <div className="w-[80%] flex flex-col space-y-3">
        <label className="text-lg text-gray-700">Correo electrónico</label>
        <input
          {...register("email", { required: true, maxLength: 80 })}
          maxLength={80}
          className="focus:border-gray-300 focus:shadow-md focus:ring-0 h-[40px] rounded-lg text-base p-0 pl-3 border border-gray-300"
          type="email"
          placeholder="ejemplo@gmail.com"
          required
        />
        <label className="text-lg text-gray-700">Contraseña</label>
        <input
          {...register("password", { required: true, maxLength: 255 })}
          maxLength={255}
          className="focus:border-gray-300 focus:shadow-md focus:ring-0 h-[40px] rounded-lg text-base p-0 pl-3 border border-gray-300"
          type="password"
          required
        />
      </div>
      <div className="w-[80%] text-sm flex justify-between">
        <div className="space-x-1 flex items-center">
          <input
            {...register("remember")}
            className="checked:bg-[#6D9773] cursor-pointer focus:border-gray-300 focus:shadow-md focus:ring-0"
            type="checkbox"
          />
          <label>Recordarme</label>
        </div>
        <button
          type="button"
          className="underline text-gray-700 hover:scale-105 duration-200"
        >
          Restablecer contraseña
        </button>
      </div>
      <button
        type="submit"
        className="p-1 bg-[#6D9773] hover:scale-110 duration-500 rounded-md w-[30%] text-white"
      >
        Iniciar sesión
      </button>
      <div className="w-[80%] flex justify-center space-x-2">
        <span>¿No tienes cuenta?</span>
        <Link
          href="/registro"
          className="underline text-gray-700 hover:scale-105 duration-200"
          onClick={() => setShowLogin(false)}
        >
          Regístrate
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
