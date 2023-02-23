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

  const { name } = req.body;

  await prisma.product.create({
    data: {
      ...req.body,
      name: name.toLowerCase(),
    },
  });

  res.status(201).json({ message: "Producto creado con éxito" });
}
