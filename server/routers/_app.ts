import { TRPCError } from "@trpc/server";
import { hash } from "bcrypt";

import { router, procedure } from "../trpc";
import { signUpSchema } from "@/lib/validation/auth";

export const appRouter = router({
  signupSeller: procedure.input(signUpSchema).query(async ({ input, ctx }) => {
    const { email, password, firstName, lastName, phone } = input;

    const exists = await ctx.prisma.user.findFirst({
      where: { email },
    });

    if (exists) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "User already exists.",
      });
    }

    const hashedPassword = await hash(password, 0);

    const result = await ctx.prisma.user.create({
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

    return {
      status: 201,
      message: "Account created successfully",
      result: result.email,
    };
  }),
  signupBuyer: procedure.input(signUpSchema).query(async ({ input, ctx }) => {
    const { email, password, firstName, lastName, phone } = input;

    const exists = await ctx.prisma.user.findFirst({
      where: { email },
    });

    if (exists) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "User already exists.",
      });
    }

    const hashedPassword = await hash(password, 0);

    const result = await ctx.prisma.user.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        password: hashedPassword,
        buyer: {
          create: {},
        },
        isActive: true,
        role: "BUYER",
      },
    });

    return {
      status: 201,
      message: "Account created successfully",
      result: result.email,
    };
  }),
});

export type AppRouter = typeof appRouter;
