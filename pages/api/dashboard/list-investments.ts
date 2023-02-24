import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";
import { Investment } from "@prisma/client";

type Data = {
  investments?: Investment[];
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    res.status(424).json({ message: "Invalid method!" });

  const { sellerId } = req.body;

  try {
    const investments = await prisma.investment.findMany({
      where: {
        sellerId,
      },
      include: {
        seller: {
          select: {
            user: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    res
      .status(200)
      .json({ investments, message: "Inversiones encontradas con éxito" });
  } catch (e) {
    console.log(e);

    res.status(400).json({ message: "Error buscando las inversiones" });
  }
}
