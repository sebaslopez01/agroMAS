import CardInvest from "../cards/CardInvest";

export default function Oportunities() {
  return (
    <>
      <div
        className="flex w-[90%] mx-auto mt-10 p-5 justify-evenly flex-wrap mb-10">
        <CardInvest />
        <CardInvest />
        <CardInvest />
      </div>
    </>
  );
}
