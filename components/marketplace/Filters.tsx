import { useForm, SubmitHandler } from "react-hook-form";
import { State, City } from "country-state-city";
import { Dispatch, SetStateAction, useState } from "react";
import { Product } from "@prisma/client";
import axios from "axios";
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
    <div className="flex flex-row items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row items-center justify-center space-x-4"
      >
        <select
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
        <select {...register("city")}>
          <option>Ciudad:</option>
          {City.getCitiesOfState("CO", stateCode).map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
}

export default Filters;
