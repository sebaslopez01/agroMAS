import type { NextApiRequest, NextApiResponse } from "next";
import sha256 from "crypto-js/sha256";

type Data = {
  message: string;
  signature?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    res.status(424).json({ message: "Método Invalido" });

  const { referenceCode, amount } = req.body;

  const signature = `${referenceCode}${amount}COP${process.env
    .SIGNATURE_TOKEN!}`;

  const encryptedSignature = sha256(signature).toString();

  res
    .status(200)
    .json({ message: "Signature generated", signature: encryptedSignature });
}
