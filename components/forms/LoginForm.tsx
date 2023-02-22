import axios from "axios";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}

interface LoginFormProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
  setShowSignup: Dispatch<SetStateAction<boolean>>;
}

function LoginForm({ setShowLogin, setShowSignup }: LoginFormProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const res = await axios.post("/api/auth/signin", data);

    if (res.status === 200) {
      setShowLogin(false);
      setShowSignup(false);

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
        <label>Correo electrónico</label>
        <input
          {...register("email", { required: true, maxLength: 80 })}
          maxLength={80}
          className="rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          type="email"
          placeholder="ejemplo@gmail.com"
          required
        />
        <label>Contraseña</label>
        <input
          {...register("password", { required: true, maxLength: 255 })}
          maxLength={255}
          className="rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          type="password"
          required
        />
      </div>
      <div className="w-[80%] text-sm flex justify-between">
        <div className="space-x-1 flex items-center">
          <input
            {...register("remember")}
            className="rounded-full checked:bg-gray-500 cursor-pointer"
            type="checkbox"
          />
          <label>Recordarme</label>
        </div>
        <button type="button" className="underline text-gray-700">
          Restablecer contraseña
        </button>
      </div>
      <button
        type="submit"
        className="p-1 border border-black hover:scale-110 duration-500 hover:bg-white w-[30%]"
      >
        Iniciar sesión
      </button>
      <div className="w-[80%] flex justify-center space-x-2">
        <span>¿No tienes cuenta?</span>
        <button
          type="button"
          onClick={() => {
            setShowSignup(true);
            setShowLogin(false);
          }}
          className="underline text-gray-700"
        >
          Regístrate
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
