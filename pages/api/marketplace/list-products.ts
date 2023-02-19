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
  if (req.method !== "GET")
    res.status(424).json({ message: "Invalid method!" });

  try {
    const products = await prisma.product.findMany();

    res
      .status(200)
      .json({ products, message: "Productos obtenidos con éxito" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error obteniendo los productos" });
  }
}
