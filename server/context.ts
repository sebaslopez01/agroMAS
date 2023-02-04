import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

import prisma from "../lib/prisma";

export async function createContext(ctx: CreateNextContextOptions) {
  const { req, res } = ctx;

  return {
    req,
    res,
    prisma,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
