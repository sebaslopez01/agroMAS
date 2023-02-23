import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { CarData } from "@/lib/interfaces";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    res.status(424).json({ message: "Método Invalido" });

  const carData = req.body as CarData[];

  try {
    await Promise.all(
      carData.map(async (data) => {
        await prisma.product.update({
          where: {
            id: data.id,
          },
          data: {
            quantitySold: {
              increment: data.quantity,
            },
            quantity: {
              decrement: data.quantity,
            },
          },
        });
      })
    );
  } catch (e) {
    console.log(e);

    res
      .status(500)
      .json({ message: "Hubo un error actualizando los datos de las ventas" });
  }

  res.status(200).json({ message: "Aceptado" });
}
