import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";

import { FullUser } from "@/lib/types";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import { Modal, ModalHeader } from "../dynamic/Modal";

interface PaymentButtonProps {
  amount: number;
  user: FullUser;
}

export default function PaymentButton({ amount, user }: PaymentButtonProps) {
  // const effectRun = useRef(true);
  const [referenceCode] = useState(nanoid());
  // const [integrityCode, setIntegrityCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // const getSignature = async () => {
  //   const res = await axios.post("/api/payment/generate-signature", {
  //     referenceCode,
  //     amount: amount * 100,
  //   });

  //   setIntegrityCode(res.data.signature);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   if (effectRun.current) getSignature();

  //   return () => {
  //     effectRun.current = false;
  //   };
  // }, []);

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
          className="w-full bg-green-300 hover:bg-green-200 rounded-full px-5 py-1"
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
          Pagar con Wompi
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
        <LoginForm setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      </Modal>

      {/* Modal SignIn */}
      <Modal
        show={showSignup}
        size="md"
        popup={true}
        onClose={() => setShowSignup(!showSignup)}
        className="h-[120vh]"
      >
        <ModalHeader className="h-0 p-0"></ModalHeader>
        <RegisterForm
          setShowLogin={setShowLogin}
          setShowSignup={setShowSignup}
        />
      </Modal>
    </>
  );
}
