import { useForm, SubmitHandler } from "react-hook-form";
import { State, City } from "country-state-city";
import { useState } from "react";
import { useRouter } from "next/router";

interface FiltersData {
  city: string;
  state: string;
}

function Filters() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FiltersData>();
  const [stateCode, setStateCode] = useState("");

  const onSubmit: SubmitHandler<FiltersData> = async (data) => {
    const stateName = State.getStateByCodeAndCountry(data.state, "CO")?.name;

    router.push({
      pathname: "/marketplace",
      query: {
        state: stateName,
        city: data.city,
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center pb-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 rounded-md border-gray-500"
      >
        <select
          className="h-[30px] w-full lg:w-1/3 p-0 pl-2 text-sm rounded-md border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          {...register("state")}
          onChange={(e) => {
            setStateCode(e.target.value);
          }}
        >
          <option value="">Departamento:</option>
          {State.getStatesOfCountry("CO").map((state, index) => (
            <option key={index} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
        <select
          className="h-[30px] w-full lg:w-1/3 p-0 pl-2 text-sm rounded-md border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          {...register("city")}
        >
          <option>Ciudad:</option>
          {City.getCitiesOfState("CO", stateCode).map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <button
          className="p-1 h-[30px] text-center w-full lg:w-1/3 border text-white bg-[#6D9773] rounded-md hover:scale-110 duration-500 "
          type="submit"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default Filters;
