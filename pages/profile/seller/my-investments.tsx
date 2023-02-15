import Meta from "@/components/Meta";
import ProfileInvest from "@/components/cards/ProfileInvest";
import Link from "next/link";

export default function SellerInvestments() {
  return (
    <>
      <Meta />
      <div className="grid grid-cols-3 w-full z-50 h-16 fixed">
        <Link href="./">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left col-start-1 ml-3"
            width="48"
            height="48"
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
          <h1 className="text-2xl p-3 font-semibold">Mis inversiones</h1>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center pt-16">
        <ProfileInvest
          proyectName="Compra de burritos sabaneros"
          proyectOwner="Un campeche"
          shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos. Saepe, quae deserunt similique recusandae laboriosam ea maxime illum illo fuga aspernatur explicabo, voluptatum dolore quaerat earum ipsum animi quam."
        />
        <ProfileInvest
          proyectName="Platica pa' sembrar maíz"
          proyectOwner="Otro campeche"
          shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos. Saepe, quae deserunt similique recusandae laboriosam ea maxime illum illo fuga aspernatur explicabo, voluptatum dolore quaerat earum ipsum animi quam."
        />
        <ProfileInvest
          proyectName="Platica pa' sembrar maíz"
          proyectOwner="Otro campeche"
          shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos. Saepe, quae deserunt similique recusandae laboriosam ea maxime illum illo fuga aspernatur explicabo, voluptatum dolore quaerat earum ipsum animi quam."
        />
        <ProfileInvest
          proyectName="Platica pa' sembrar maíz"
          proyectOwner="Otro campeche"
          shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos. Saepe, quae deserunt similique recusandae laboriosam ea maxime illum illo fuga aspernatur explicabo, voluptatum dolore quaerat earum ipsum animi quam."
        />
      </div>
    </>
  );
}
