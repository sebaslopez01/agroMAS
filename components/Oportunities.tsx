import CardInvest from "./CardInvest";

export default function Oportunities() {
  return (
    <>
      <div
        id="oportunities"
        className="flex 
        
        h-fit w-full p-5 bg-[url('/prueba.jpg')] bg-cover justify-evenly flex-wrap">
        <CardInvest />
        <CardInvest />
        <CardInvest />
      </div>
    </>
  );
}
