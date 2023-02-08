import CardInvest from "../cards/CardInvest";

export default function Oportunities() {
  return (
    <>
      <div
        id="oportunities"
        className="flex w-full p-5 justify-evenly flex-wrap">
        <CardInvest />
        <CardInvest />
        <CardInvest />
      </div>
    </>
  );
}
