import { compare } from "bcrypt";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import { IncomingMessage, ServerResponse } from "http";
import { User } from "@prisma/client";

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

export function generateToken(user: User) {
  const payload = {
    userId: user.id,
  };

  return jwt.sign(payload, process.env.TOKEN_SECRET!, { expiresIn: "1d" });
}

type ReqData = IncomingMessage & {
  cookies: Partial<{
    [key: string]: string;
  }>;
};

type ResData = ServerResponse<IncomingMessage>;

export async function getUser(req: ReqData, res: ResData) {
  const token = getCookie("token", { req, res })?.toString();

  if (!token) return null;

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET!) as CookieData;
    const user = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
      include: {
        seller: true,
        buyer: true,
      },
    });

    return user;
  } catch (e) {
    return null;
  }
}
