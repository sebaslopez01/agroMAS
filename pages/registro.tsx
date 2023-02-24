import { GetServerSideProps } from "next";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { State, City } from "country-state-city";
import axios from "axios";
import { useRouter } from "next/router";

import { FullUser } from "@/lib/types";
import { getUser } from "@/utils/auth";
import LayoutGeneral from "@/components/LayoutGeneral";

interface RegisterData {
  firstName: string;
  lastName: string;
  phone?: string;
  role: "BUYER" | "SELLER";
  documentType: "CC" | "CE" | "PP";
  documentNumber: string;
  state: string;
  city: string;
  email: string;
  password: string;
  terms: boolean;
  remember: boolean;
}

interface RegisterProps {
  user: FullUser;
}

export default function Register({ user }: RegisterProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<RegisterData>();
  const [stateCode, setStateCode] = useState("");

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    console.log(data);
    const state = State.getStateByCodeAndCountry(data.state, "CO")?.name;
    const endpoint =
      data.role === "SELLER"
        ? "/api/auth/signup-seller"
        : "/api/auth/signup-buyer";

    const res = await axios.post(endpoint, {
      ...data,
      state,
    });

    if (res.status === 201) {
      router.push("/");
    }
  };

  return (
    <LayoutGeneral user={user} pageName="Registro">
      <form
        id="registerForm"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-[80%] mx-auto mt-5 flex flex-col items-center justify-center p-3 space-y-5"
      >
        <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col space-y-5">
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row w-full h-auto md:space-x-5 ">
            <div className="w-[80%] md:w-[50%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Nombres
              </label>
              <input
                {...register("firstName", { required: true, maxLength: 60 })}
                className="input"
                type="text"
                required
                maxLength={60}
              />
            </div>
            <div className="w-[80%] md:w-[50%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Apellidos
              </label>
              <input
                {...register("lastName", { required: true, maxLength: 60 })}
                className="input"
                type="text"
                required
                maxLength={60}
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row w-full h-auto md:space-x-5 ">
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Tipo de documento
              </label>
              <select
                {...register("documentType", { required: true })}
                id="ids"
                required
                className="input cursor-pointer"
              >
                <option className="cursor-pointer" value="CC">
                  Cédula de Ciudadanía
                </option>
                <option className="cursor-pointer" value="CE">
                  Cédula de Extranjería
                </option>
                <option className="cursor-pointer" value="PP">
                  Pasaporte
                </option>
              </select>
            </div>
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label htmlFor="nId" className="label">
                Nº de documento
              </label>
              <input
                {...register("documentNumber", {
                  required: true,
                  maxLength: 20,
                })}
                className="input"
                type="text"
                required
                maxLength={20}
              />
            </div>
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Celular
              </label>
              <input {...register("phone")} className="input" type="text" />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row w-full h-auto md:space-x-5 ">
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Registrarse como:
              </label>
              <select
                {...register("role", { required: true })}
                id="roles"
                required
                className="input cursor-pointer"
              >
                <option value="BUYER">Cliente</option>
                <option value="SELLER">Vendedor</option>
              </select>
            </div>
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Departamento
              </label>
              <select
                {...register("state", { required: true })}
                id="state"
                required
                className="input cursor-pointer"
                onChange={(e) => {
                  setStateCode(e.target.value);
                }}
              >
                {State.getStatesOfCountry("CO").map((state, index) => (
                  <option key={index} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[80%] md:w-[33%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Ciudad
              </label>
              <select
                {...register("city", { required: true })}
                id="city"
                required
                className="input cursor-pointer"
              >
                {City.getCitiesOfState("CO", stateCode).map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row w-full h-auto md:space-x-5 ">
            <div className="w-[80%] md:w-[50%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Correo electrónico
              </label>
              <input
                {...register("email", { required: true, maxLength: 80 })}
                className="input"
                type="email"
                placeholder="email@ejemplo.com"
                required
                maxLength={80}
              />
            </div>
            <div className="w-[80%] md:w-[50%] flex flex-col space-y-2">
              <label htmlFor="" className="label">
                Contraseña
              </label>
              <input
                {...register("password", { required: true, maxLength: 255 })}
                className="input"
                type="password"
                required
                maxLength={255}
              />
            </div>
          </div>
        </div>

        <div className="w-[80%] space-x-2 md:space-x-1 flex md:items-center">
          <input
            {...register("remember", { required: true })}
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
        <button
          type="submit"
          form="registerForm"
          className="p-1 bg-[#6D9773] hover:scale-110 duration-500 text-white w-[40%] md:w-[20%] rounded-md"
        >
          Registrarse
        </button>
      </form>
    </LayoutGeneral>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

  return {
    props: {
      user,
    },
  };
};
