import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";

import { FullUser } from "@/lib/types";
import LoginForm from "../forms/LoginForm";
import { Modal, ModalHeader } from "../dynamic/Modal";

interface InvestButtonProps {
  amount: number;
  user: FullUser;
}

export default function InvestButton({ amount, user }: InvestButtonProps) {
  const [referenceCode] = useState(nanoid());
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <form action="https://checkout.wompi.co/p/" method="GET">
        <input
          type="hidden"
          name="public-key"
          value="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf"
        />
        <input type="hidden" name="currency" value="COP" />
        <input
          type="hidden"
          name="amount-in-cents"
          value={(amount * 100).toString()}
        />
        <input type="hidden" name="reference" value={referenceCode} />
        <input
          type="hidden"
          name="redirect-url"
          value={`${process.env.NEXT_PUBLIC_DOMAIN}/payment/response`}
        />
        <input
          type="hidden"
          name="customer-data:email"
          value={user?.email || ""}
        />
        <input
          type="hidden"
          name="customer-data:full-name"
          value={`${user?.firstName} ${user?.lastName}` || ""}
        />
        <input
          type="hidden"
          name="customer-data:phone-number"
          value={user?.phone || ""}
        />
        <input
          type="hidden"
          name="customer-data:legal-id"
          value={user?.documentNumber || ""}
        />
        <input
          type="hidden"
          name="customer-data:legal-id-type"
          value={user?.documentType || ""}
        />
        <button
          type="submit"
          className="w-[40%] bg-[#6D9773] p-1 rounded-md text-white font-semibold md:text-lg hover:scale-105 duration-300 flex justify-center"
          onClick={(e) => {
            if (amount === 0) {
              e.preventDefault();
              return toast.error("Por favor agrega productos al carrito");
            }
            if (!user) {
              e.preventDefault();
              setShowLogin(true);
            }
          }}
        >
          Invertir con Wompi
        </button>
      </form>
      {/* Modal LogIn */}
      <Modal
        show={showLogin}
        size="md"
        popup={true}
        onClose={() => setShowLogin(!showLogin)}
        className="h-[120vh]"
      >
        <ModalHeader className="h-0"></ModalHeader>
        <LoginForm setShowLogin={setShowLogin} />
      </Modal>
    </>
  );
}
