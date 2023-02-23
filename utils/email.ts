import nodemailer from "nodemailer";

export async function sendEmail(
  to: string,
  subject: string,
  from: string,
  html?: string
) {
  const tranporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: +process.env.SMTP_PORT!,
    secure: true,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASSWORD!,
    },
  });

  const sent = await tranporter.sendMail({
    from,
    to,
    subject,
    html,
  });

  return sent;
}
