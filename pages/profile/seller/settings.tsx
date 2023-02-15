import Avatar from "@/components/Avatar";
import Meta from "@/components/Meta";

interface ProfileMenuProps {
  userName: string;
  role: string;
}

export default function ProfileMenu({ userName, role }: ProfileMenuProps) {
  return (
    <>
      <Meta />
      <div className="grid grid-cols-6 grid-rows-2 pt-12 px-3 pb-5 h-[100vh] bg-[#ECECEA] text-black">
        <div
          id="glass-bg"
          className="rounded-xl m-3 p-3 col-start-1 col-span-2 row-start-1 row-span-2"
        >
          <div className="flex flex-col items-center justify-center mb-5 py-3 border rounded-xl">
            <Avatar />
            <div className="flex flex-col justify-center items-center my-auto">
              <h2 className="text-2xl font-medium">Panchita Pérez</h2>
              <p className="text-gray-100 mb-5">Cliente</p>
            </div>
          </div>
          {/* <div className="flex flex-col m-3 items-start">
            <span>Mis compras</span>
            <span>Mis Inversiones</span>
            <span>Configuración</span>
            <span> Cerrar sesión</span>
          </div> */}
        </div>

        <div
          id="glass-bg"
          className="flex justify-center items-center flex-col text-xl font-semibold m-3 rounded-xl col-start-3 col-span-2 row-start-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-receipt mr-2"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            stroke-width=".7"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"></path>
          </svg>
          <span>Mis compras </span>
        </div>
        <div
          id="glass-bg"
          className="flex justify-center items-center flex-col text-xl font-semibold m-3 rounded-xl col-start-5 col-span-2 row-start-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-timeline mr-2"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            stroke-width=".7"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 16l6 -7l5 5l5 -6"></path>
            <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          </svg>
          <span>Mis inversiones </span>
        </div>
        <div
          id="glass-bg"
          className="flex justify-center items-center flex-col text-xl font-semibold m-3 rounded-xl col-start-3 col-span-2 row-start-2"
        >
          <span>Ver carrito </span>
        </div>
        <div
          id="glass-bg"
          className="flex justify-center items-center flex-col text-xl font-semibold m-3 rounded-xl col-start-5 row-start-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-settings mr-2"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            stroke-width=".7"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          </svg>
          <span>Configuración</span>
        </div>
        <div
          id="glass-bg"
          className="flex justify-center items-center flex-col text-xl font-semibold m-3 rounded-xl col-start-6 row-start-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout mr-2"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            stroke-width=".7"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
          </svg>
          <span>Cerrar sesión</span>
        </div>
      </div>
    </>
  );
}
