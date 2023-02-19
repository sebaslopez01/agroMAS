import { Product } from "@prisma/client";
import { useState } from "react";
import Turnstone from "turnstone";
import useSWR from "swr";
import { getFetcher } from "@/utils/helpers";
import { useRouter } from "next/router";

const styles = {
  container: "relative text-left h-full w-[70%] md:w-[70%]",
  input:
    "w-full h-full p-3 focus:outline-none text-gray-600 placeholder-gray-400 lg:text-xl lg:font-medium rounded-l-xl",
  listbox:
    "w-full bg-white sm:border sm:border-darkBlue sm:rounded text-left sm:mt-2 p-2 sm:drop-shadow-xl",
  highlightedItem:
    "cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-blue-500 rounded bg-blue-100",
};

function SearchBox() {
  const router = useRouter();
  const [item, setItem] = useState("");
  const { data, isLoading } = useSWR(
    "/api/marketplace/list-products",
    getFetcher
  );

  if (isLoading)
    return (
      <div>
        <span>Cargando...</span>
      </div>
    );

  const listbox = {
    data: [...new Set(data.products.map((product: Product) => product.name))],
    searchType: "contains",
    totalItems: 3,
  };

  const onSelect = (item: string) => {
    setItem(item);
    router.push({
      pathname: "/marketplace",
      query: {
        name: item,
      },
    });
  };

  return (
    <div className="flex justify-center items-center h-10 w-[65%] lg:w-[40%]">
      <Turnstone
        id="glass-bg"
        name="searchMarket"
        listbox={listbox}
        listboxIsImmutable
        matchText
        typehead
        maxItems={3}
        noItemsMessage="No pudimos encontrar el producto que buscas, intenta con otras palabras"
        styles={styles}
        onEnter={onSelect}
        onChange={(item: string) => setItem(item)}
        placeholder="¿Qué buscas?..."
      />
      <button
        id="card"
        className="flex w-[20%] md:w-[10%] h-full justify-center items-center rounded-r-xl"
        onClick={() => onSelect(item)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
      </button>
    </div>
  );
}

export default SearchBox;
