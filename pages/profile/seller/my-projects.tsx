import NavBarMarket from "@/components/navigation/NavBarMarket"
import Meta from "@/components/Meta"
import Link from "next/link"
import Footer from "@/components/navigation/Footer"

export default function SellerProjects () {
    return (
        <>
        <Meta />
      <NavBarMarket />
      <div className="grid grid-cols-3 w-full z-50 p-3">
        <Link
          href="/profile/seller"
          className="w-[100%] h-[100%] flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left col-start-1 ml-3 w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]"
            // width="48"
            // height="48"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </Link>

        <div className="m-auto col-start-2">
          <h1 className="text-md lg:text-2xl font-semibold">Mis proyectos</h1>
        </div>
      </div>

      <div className="flex justify-evenly w-[100%] pt-5 flex-wrap p-5">
        


      </div>
      <Footer />
        </>
    )
}