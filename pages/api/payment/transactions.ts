import type { NextApiRequest, NextApiResponse } from "next";
import sha256 from "crypto-js/sha256";
import { sendEmail } from "@/utils/email";

type Data = {
  message: string;
  signature?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body.data.transaction;
    const timestamp = req.body.timestamp;
    const wompiChecksum = req.body.signature.checksum;

    const checksum = `${data.id}${data.status}${
      data.amount_in_cents
    }${timestamp}${process.env.WOMPI_EVENTS_KEY!}`;

    const encryptedCheksum = sha256(checksum).toString();

    if (encryptedCheksum !== wompiChecksum)
      res.status(424).json({ message: "Transacción incorrecta" });

    if (data.status === "APPROVED") {
      await sendEmail(
        data.customer_email,
        "Transacción Aprovada",
        "example@gmail.com"
      );
    }

    res.status(200).json({ message: "Aceptado" });
  } else {
    res.status(424).json({ message: "Método Invalido" });
  }
}
