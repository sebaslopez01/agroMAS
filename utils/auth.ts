import type { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";

import prisma from "@/lib/prisma";

type CookieData = {
  userId: string;
};

export function confirmPasswordHash(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    compare(plainPassword, hashedPassword, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

export async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const token = getCookie("token", { req, res })?.toString();

  if (!token) return null;

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET!) as CookieData;
    const user = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    });

    return user;
  } catch (e) {
    return null;
  }
}
