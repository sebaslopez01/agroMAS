import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";
import { generateToken } from "@/utils/auth";
import { sendEmail } from "@/utils/email";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email } = req.body;

  if (req.method === "POST") {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user)
      return res.status(422).json({
        message:
          "No pudimos encontrar una cuenta que coincida con el correo electrónico.",
      });

    const token = generateToken(user);
    const message = `
      <a href="http://localhost:3000/password/recovery/${token}">Cambiar contraseña/</a>
    `;
    const emailSent = await sendEmail(
      email,
      "AgroMAS - Cambio de contraseña",
      "agromas@gmail.com",
      message
    );

    if (!emailSent)
      return res.status(409).send({
        message:
          "Hubo un problema enviando el correo de recuperación, por favor inténtelo mas tarde.",
      });

    res.status(200).json({
      message:
        "Se ha enviado un correo de recuperación a su correo electrónico, no olvide revisar en la lista de Spam.",
    });
  } else {
    res.status(424).json({ message: "Metodo Invalido" });
  }
}
