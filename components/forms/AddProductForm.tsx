import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { State, City } from "country-state-city";

import { FullUser } from "@/lib/types";

interface AddProductData {
  name: string;
  price: string;
  quantity: string;
  measure: "KG" | "LB" | "UND";
  description: string;
  city: string;
  state: string;
}

interface AddProductFormProps {
  setShowAddProduct: Dispatch<SetStateAction<boolean>>;
  getProducts: () => Promise<void>;
  user: FullUser;
}

export default function AddProductForm({
  setShowAddProduct,
  getProducts,
  user,
}: AddProductFormProps) {
  const { register, handleSubmit, control } = useForm<AddProductData>();
  const [stateCode, setStateCode] = useState("");

  const onSubmit: SubmitHandler<AddProductData> = async (data) => {
    const price = parseInt(data.price.replaceAll(".", "").slice(1));
    const quantity = parseInt(data.quantity);
    const state = State.getStateByCodeAndCountry(data.state, "CO")?.name;

    const res = await axios.post("/api/dashboard/add-product", {
      ...data,
      price,
      quantity,
      state,
      sellerId: user?.seller?.id,
    });

    if (res.status === 201) {
      setShowAddProduct(false);
      getProducts();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-center pb-5 pt-3 space-y-2"
    >
      <h1 className="text-xl font-bold">Nuevo Producto</h1>
      <div className="w-[80%] flex flex-col space-y-3">
        <div className="flex flex-col">
          <label>Nombre</label>
          <input
            {...register("name", { required: true, maxLength: 60 })}
            className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            type="text"
            required
            maxLength={60}
          />
        </div>
        <div className="flex flex-col">
          <label>Precio</label>
          <Controller
            name="price"
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
          <label>Cantidad</label>
          <Controller
            name="quantity"
            control={control}
            render={({ field: { onChange, name, value } }) => (
              <NumericFormat
                allowNegative={false}
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
            {...register("description", { required: true, maxLength: 250 })}
            className="h-[30px] rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            type="text"
            required
            maxLength={250}
          />
        </div>
        <div className="flex flex-col">
          <label>Medida</label>
          <select
            {...register("measure", { required: true })}
            name="measure"
            id="roles"
            required
            className="h-[30px] p-0 pl-2 text-sm rounded-full border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          >
            <option value="KG">Kilogramos</option>
            <option value="LB">Libras</option>
            <option value="UND">Unidad</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Departamento</label>
          <select
            {...register("state", { required: true })}
            name="state"
            id="roles"
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
            id="roles"
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
        className="p-1 border border-black hover:scale-110 duration-500 hover:bg-white w-[30%]"
      >
        Agregar Producto
      </button>
    </form>
  );
}
