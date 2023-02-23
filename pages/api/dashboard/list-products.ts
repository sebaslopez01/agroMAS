import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

type Data = {
  products?: Product[];
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
    const products = await prisma.product.findMany({
      where: {
        sellerId,
      },
    });

    res
      .status(200)
      .json({ products, message: "Productos encontrados con éxito" });
  } catch (e) {
    console.log(e);

    res.status(400).json({ message: "Error buscando los productos" });
  }
}
