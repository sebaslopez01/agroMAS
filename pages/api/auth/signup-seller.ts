import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
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
  const { firstName, lastName, phone, email, password } = req.body;

  if (req.method === "POST") {
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
        password: hashedPassword,
        seller: {
          create: {
            products: {},
          },
        },
        isActive: true,
        role: "SELLER",
      },
    });

    const token = generateToken(newUser);

    setCookie("token", token, {
      req,
      res,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    res.status(201).json({ message: "user created!" });
  } else {
    res.status(424).json({ message: "Inavalid method!" });
  }
}
