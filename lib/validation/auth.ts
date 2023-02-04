import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signUpSchema = loginSchema.extend({
  firstName: z.string().max(60),
  lastName: z.string().max(60),
  phone: z.string().max(20).optional(),
});

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;
