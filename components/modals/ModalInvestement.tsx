import dynamic from "next/dynamic";
import { useState } from "react";

const Modal = dynamic(() => import("flowbite-react").then((mod) => mod.Modal), {
  ssr: false,
});
const ModalHeader = dynamic(
  () => import("flowbite-react").then((mod) => mod.Modal.Header),
  { ssr: false }
);

export default function ModalInvestment() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="w-[40%] bg-[#6D9773] p-1 rounded-md text-white font-semibold md:text-lg hover:scale-105 duration-300 flex justify-center"
      >
        Invierte
      </button>
      <Modal show={show} size="md" popup={true} onClose={() => setShow(!show)}>
        <ModalHeader className="h-0"></ModalHeader>
        <div className="w-[90%] mx-auto h-auto flex flex-col items-center py-8 space-y-8">
          <h2 className="text-lg text-gray-600 font-bold">Ingresa la cantidad que quieres invertir:</h2>
          <input className="focus:border-gray-300 focus:shadow-md focus:ring-0 w-[70%] h-[40px] rounded-lg text-base p-0 pl-3 border border-gray-300" type="number" />
          <button className="w-[40%] bg-[#6D9773] p-1 rounded-md text-white font-semibold md:text-lg hover:scale-105 duration-300 flex justify-center">
            Invertir
          </button>
        </div>
      </Modal>
    </>
  );
}
