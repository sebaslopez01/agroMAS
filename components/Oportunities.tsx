import CardInvest from "./CardInvest";

export default function Oportunities() {
  return (
    <>
      <div
        id="oportunities"
        className="flex p-3 h-fit w-full bg-[url('/prueba.jpg')] bg-cover justify-evenly flex-wrap">
        <CardInvest />
        <CardInvest />
        <CardInvest />
      </div>
    </>
  );
}
