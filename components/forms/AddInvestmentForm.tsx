import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { State, City } from "country-state-city";

import { FullUser } from "@/lib/types";

interface AddInvestmentData {
  title: string;
  investmentTarget: string;
  returnInvestment: string;
  minimumAmount: string;
  shortDescription: string;
  city: string;
  state: string;
}

interface AddInvestmentFormProps {
  setShowAddInvestment: Dispatch<SetStateAction<boolean>>;
  getInvestments: () => Promise<void>;
  user: FullUser;
}

export default function AddInvestmentForm({
  setShowAddInvestment,
  getInvestments,
  user,
}: AddInvestmentFormProps) {
  const { register, handleSubmit, control, reset } =
    useForm<AddInvestmentData>();
  const [stateCode, setStateCode] = useState("");

  const onSubmit: SubmitHandler<AddInvestmentData> = async (data) => {
    const investmentTarget = parseInt(
      data.investmentTarget.replaceAll(".", "").slice(1)
    );
    const minimumAmount = parseInt(
      data.minimumAmount.replaceAll(".", "").slice(1)
    );
    const returnInvestment = parseInt(data.returnInvestment.slice(0, -2)) / 100;
    const state = State.getStateByCodeAndCountry(data.state, "CO")?.name;

    const res = await axios.post("/api/dashboard/add-investment", {
      ...data,
      investmentTarget,
      minimumAmount,
      returnInvestment,
      state,
      sellerId: user?.seller?.id,
    });

    if (res.status === 201) {
      setShowAddInvestment(false);
      reset();
      getInvestments();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-center pb-5 pt-3 space-y-2"
    >
      <h1 className="text-xl font-bold">Nuevo Proyecto</h1>
      <div className="w-[80%] flex flex-col space-y-3">
        <div className="flex flex-col">
          <label>Nombre del proyecto</label>
          <input
            {...register("title", { required: true, maxLength: 60 })}
            className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            type="text"
            required
            maxLength={60}
          />
        </div>
        <div className="flex flex-col">
          <label>Objetivo de inversión</label>
          <Controller
            name="investmentTarget"
            control={control}
            render={({ field: { onChange, name, value } }) => (
              <NumericFormat
                allowNegative={false}
                prefix="$"
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={0}
                className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                onChange={onChange}
                name={name}
                value={value}
                required
              />
            )}
          />
        </div>
        <div className="flex flex-col">
          <label>Retorno de la inversión</label>
          <Controller
            name="returnInvestment"
            control={control}
            render={({ field: { onChange, name, value } }) => (
              <NumericFormat
                allowNegative={false}
                suffix=" %"
                isAllowed={(values) => {
                  const value = parseInt(values.value);
                  return isNaN(value) || value <= 100;
                }}
                decimalScale={0}
                className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                onChange={onChange}
                name={name}
                value={value}
                required
              />
            )}
          />
        </div>
        <div className="flex flex-col">
          <label>Inversión mínima</label>
          <Controller
            name="minimumAmount"
            control={control}
            render={({ field: { onChange, name, value } }) => (
              <NumericFormat
                allowNegative={false}
                prefix="$"
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={0}
                className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
                onChange={onChange}
                name={name}
                value={value}
                required
              />
            )}
          />
        </div>
        <div className="flex flex-col">
          <label>Descripción</label>
          <input
            {...register("shortDescription", {
              required: true,
              maxLength: 250,
            })}
            className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            type="text"
            required
            maxLength={250}
          />
        </div>
        <div className="flex flex-col">
          <label>Departamento</label>
          <select
            {...register("state", { required: true })}
            name="state"
            required
            className="h-[30px] p-0 pl-2 text-sm rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
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
        <div className="flex flex-col">
          <label>Ciudad</label>
          <select
            {...register("city", { required: true })}
            name="city"
            required
            className="h-[30px] p-0 pl-2 text-sm rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          >
            {City.getCitiesOfState("CO", stateCode).map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="p-1 border whitespace-nowrap rounded-md border-black hover:scale-110 duration-300 hover:bg-white w-[30%]"
      >
        Agregar Proyecto
      </button>
    </form>
  );
}
