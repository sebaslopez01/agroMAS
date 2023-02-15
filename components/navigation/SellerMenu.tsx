import Avatar from "../Avatar";
import Meta from "../Meta";
import Link from "next/link";

interface ProfileMenuProps {
  userName: string;
  role: string;
}

export default function SellerMenu({ userName, role }: ProfileMenuProps) {
  return (
    <>
      <Meta />
      <div
        id="glass-bg"
        className="rounded-xl w-[75%] h-[85vh] md:w-[50%] lg:w-[23%] mt-20 ml-5 p-3 fixed z-40 hidden lg:block"
      >
        <div className="flex flex-col items-center justify-center mb-5 py-3">
          <Avatar />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-medium">{userName}</h2>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <div className="flex flex-col m-3 items-start">
          <Link
            href="/profile/seller/my-products"
            className="flex h-10 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-building-store mr-2"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21l18 0"></path>
              <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
              <path d="M5 21l0 -10.15"></path>
              <path d="M19 21l0 -10.15"></path>
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
            </svg>
            <span className="">Mis productos</span>
          </Link>
          <Link
            href="/profile/seller/my-projects"
            className="flex h-10 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-seeding mr-2"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"></path>
              <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"></path>
              <path d="M12 20l0 -10"></path>
            </svg>
            <span className="">Mis proyectos</span>
          </Link>
          <Link
            href="/profile/seller/my-purchases"
            className="flex h-10 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-receipt mr-2"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"></path>
            </svg>
            <span className="">Mis compras</span>
          </Link>
          <Link
            href="/profile/seller/my-investments"
            className="flex h-10 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-timeline mr-2"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
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
            <span className="">Mis Inversiones</span>
          </Link>
          <Link
            href="/profile/seller/settings"
            className="flex h-10 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-settings mr-2"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            </svg>
            <span>Configuración</span>
          </Link>
          <button className="flex h-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-logout mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
            </svg>
            <span> Cerrar sesión</span>
          </button>
        </div>
      </div>
    </>
  );
}
