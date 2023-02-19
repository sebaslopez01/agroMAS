import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";

import prisma from "@/lib/prisma";
import { confirmPasswordHash, generateToken } from "@/utils/auth";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body;

  if (req.method !== "POST")
    res.status(424).json({ message: "Invalid method!" });

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) return res.status(422).json({ message: "Wrong email!" });

  const isValidPassword = await confirmPasswordHash(password, user.password);

  if (!isValidPassword)
    return res.status(422).json({ message: "Wrong password or email!" });

  const token = generateToken(user);

  setCookie("token", token, {
    req,
    res,
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  res.status(200).json({ message: "User signin!" });
}
