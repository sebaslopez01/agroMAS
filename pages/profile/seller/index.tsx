import Meta from "@/components/Meta";
import SellerMenu from "@/components/navigation/SellerMenu";

export default function SellerIndexProfile() {
  return (
    <>
      <Meta />
      <div className="grid grid-cols-3 w-full py-3 fixed z-50 h-16">
        <button onClick={() => window.history.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left col-start-1 ml-3"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </button>
        <div className="m-auto col-start-2">
          <h1 className="text-2xl p-3 font-medium">Mi perfil</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <SellerMenu userName="Don Jacinto" role="Vendedor" />
      </div>
    </>
  );
}
