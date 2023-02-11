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

  const user = await prisma.user.update({
    where: {
      email: req.body.email,
    },
    data: req.body.data,
  });

  res.status(201).json({ message: "Datos de usuario actualizado" });
}
