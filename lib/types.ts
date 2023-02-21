import { Buyer, Seller, User } from "@prisma/client";

export type FullUser =
  | (User & {
      seller: Seller | null;
      buyer: Buyer | null;
    })
  | null;
