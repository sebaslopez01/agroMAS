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

  const { name, id } = req.body;

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      ...req.body,
      name: name.toLowerCase(),
    },
  });

  res.status(200).json({ message: "Producto creado con éxito" });
}
