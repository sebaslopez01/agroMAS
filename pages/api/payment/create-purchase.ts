import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    res.status(424).json({ message: "Método Invalido" });

  try {
    await prisma.purchase.create({
      data: req.body,
    });
  } catch (e) {
    console.log(e);

    res
      .status(500)
      .json({ message: "Hubo un error actualizando los datos de las ventas" });
  }

  res.status(200).json({ message: "Aceptado" });
}
