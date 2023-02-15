import ProfileInvest from "../cards/ProfileInvest";

export default function MyInvestments() {
  return (
    <>
      <div className="flex flex-col p-4 lg:pl-10 lg:mt-16 lg:ml-80">
        <h1 className="text-2xl">Mis inversiones</h1>
        <ProfileInvest proyectName="Compra de burritos sabaneros" proyectOwner="Un campeche" shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos. Saepe, quae deserunt similique recusandae laboriosam ea maxime illum illo fuga aspernatur explicabo, voluptatum dolore quaerat earum ipsum animi quam." />
        <ProfileInvest proyectName="Platica pa' sembrar maíz" proyectOwner="Otro campeche" shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos. Saepe, quae deserunt similique recusandae laboriosam ea maxime illum illo fuga aspernatur explicabo, voluptatum dolore quaerat earum ipsum animi quam." />
        <ProfileInvest proyectName="Platica pa' sembrar maíz" proyectOwner="Otro campeche" shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos. Saepe, quae deserunt similique recusandae laboriosam ea maxime illum illo fuga aspernatur explicabo, voluptatum dolore quaerat earum ipsum animi quam." />
      </div>
    </>
  );
}
