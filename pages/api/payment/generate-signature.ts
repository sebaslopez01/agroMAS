import type { NextApiRequest, NextApiResponse } from "next";
import sha256 from "crypto-js/sha256";
// import crypto from "crypto";

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
    .WOMPI_INTEGRITY_KEY!}`;

  // const encodedText = new TextEncoder().encode(signature);
  // const hashBuffer = await crypto.subtle.digest("SHA-256", encodedText);
  // const hashArray = Array.from(new Uint8Array(hashBuffer));
  // const hashHex = hashArray
  //   .map((b) => b.toString(16).padStart(2, "0"))
  //   .join("");

  const encryptedSignature = sha256(signature).toString();

  res
    .status(200)
    .json({ message: "Signature generated", signature: encryptedSignature });
}
