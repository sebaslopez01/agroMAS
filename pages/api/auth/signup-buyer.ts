import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";
import { hash } from "bcrypt";

import prisma from "@/lib/prisma";
import { generateToken } from "@/utils/auth";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    firstName,
    lastName,
    phone,
    email,
    password,
    documentType,
    documentNumber,
    city,
    state,
    terms,
  } = req.body;

  if (req.method !== "POST")
    res.status(424).json({ message: "Invalid method!" });
  const userExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (userExists) {
    return res.status(422).json({ message: "Email already on use!" });
  }

  const hashedPassword = await hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      phone,
      email,
      terms,
      documentType,
      documentNumber,
      city,
      state,
      password: hashedPassword,
      buyer: {
        create: {
          purchases: {},
          investments: {},
        },
      },
      isActive: true,
      role: "BUYER",
    },
  });

  const token = generateToken(newUser);

  setCookie("token", token, {
    req,
    res,
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  res.status(201).json({ message: "User created!" });
}
