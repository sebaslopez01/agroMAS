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

  const {
    title,
    investmentTarget,
    returnInvestment,
    minimumAmount,
    shortDescription,
    city,
    state,
    sellerId,
  } = req.body;

  await prisma.investment.create({
    data: {
      title,
      investmentTarget,
      returnInvestment,
      minimumAmount,
      shortDescription,
      city,
      state,
      sellerId,
    },
  });

  res.status(201).json({ message: "Inversión creada con éxito" });
}
