import { FullUser } from "@/lib/types";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { Modal, ModalHeader } from "../dynamic/Modal";
import InvestButton from "../payment/InvestButton";

interface ModalInvestementProps {
  user: FullUser;
}

export default function ModalInvestment({ user }: ModalInvestementProps) {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);

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
          <h2 className="text-lg text-gray-600 font-bold">
            Ingresa la cantidad que quieres invertir:
          </h2>
          <NumericFormat
            onChange={(e) =>
              setAmount(parseInt(e.target.value.replaceAll(".", "").slice(1)))
            }
            allowNegative={false}
            prefix="$"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
            required
            className="focus:border-gray-300 focus:shadow-md focus:ring-0 w-[70%] h-[40px] rounded-lg text-base p-0 pl-3 border border-gray-300"
          />
          <InvestButton user={user} amount={amount} />
        </div>
      </Modal>
    </>
  );
}
