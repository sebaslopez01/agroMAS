import dynamic from "next/dynamic";
import React, { useState } from "react";

const Modal = dynamic(() => import("flowbite-react").then((mod) => mod.Modal), {
  ssr: false,
});
const ModalHeader = dynamic(
  () => import("flowbite-react").then((mod) => mod.Modal.Header),
  { ssr: false }
);
const ModalBody = dynamic(
  () => import("flowbite-react").then((mod) => mod.Modal.Body),
  { ssr: false }
);
const ModalFooter = dynamic(
  () => import("flowbite-react").then((mod) => mod.Modal.Footer),
  { ssr: false }
);

export default function ModalCard() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="p-2 border border-black hover:scale-110 duration-500 hover:bg-white rounded-md"
        onClick={() => setShow(!show)}
      >
        Conoce más
      </button>
      <Modal show={show} onClose={() => setShow(!show)}>
        <ModalHeader>Detalles</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union&apos;s General Data Protection Regulation
              (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
              common set of data rights in the European Union. It requires
              organizations to notify users as soon as possible of high-risk
              data breaches that could personally affect them.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="flex w-full justify-end space-x-5">
            <button
              className="p-2 border border-black hover:scale-110 duration-500 hover:bg-white"
              onClick={() => setShow(!show)}
            >
              Acepto
            </button>
            <button
              className="p-2 border border-black hover:scale-110 duration-500 hover:bg-white"
              onClick={() => setShow(!show)}
            >
              Cancelar
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}
