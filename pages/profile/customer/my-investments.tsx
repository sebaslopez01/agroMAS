import Meta from "@/components/Meta";
import ProfileInvest from "@/components/cards/ProfileInvest";
import Link from "next/link";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import Footer from "@/components/navigation/Footer";

export default function CustomerInvestments() {
  return (
    <>
      <Meta />
      <NavBarMarket />
      
      <div className="flex flex-col w-full justify-center pt-5">
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
      <Footer />
    </>
  );
}
