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
    res.status(424).json({ message: "Invalid method!" });

  const { id } = req.body;

  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    console.log(e);

    res.status(400).json({ message: "Error eliminando el producto" });
    return;
  }

  res.status(200).json({ message: "Producto eliminado con éxito" });
}
