import { nanoid } from "nanoid";
import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import axios from "axios";

interface PaymentButtonProps {
  amount: number;
  buyerEmail: string;
  legalId: string;
}

function PaymentButton({ amount, buyerEmail, legalId }: PaymentButtonProps) {
  const effectRun = useRef(true);
  const [referenceCode] = useState(nanoid());
  const [attrWompi, setAttrWompi] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getSignature = async () => {
    axios
      .post("/api/payment/generate-signature", {
        referenceCode,
        amount,
      })
      .then((res) => {
        setAttrWompi({
          "data-signature:integrity": res.data.signature,
          "data-customer-data:email": buyerEmail,
          "data-customer-data:legal-id": legalId,
          "data-customer-data:legal-id-type": "CC",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (effectRun.current) getSignature();

    return () => {
      effectRun.current = false;
    };
  }, []);

  return (
    <>
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-4 w-4 text-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <form>
          <Script
            src="https://checkout.wompi.co/widget.js"
            data-render="button"
            data-public-key="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf"
            data-currency="COP"
            data-amount-in-cents={(amount * 100).toString()}
            data-reference={referenceCode}
            {...attrWompi}
          />
        </form>
      )}
    </>
  );
}

export default PaymentButton;
