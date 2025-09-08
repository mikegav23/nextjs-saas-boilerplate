import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(4, { message: "Be at least 4 characters long" })
    .trim(),
});

export type SignInActionState = {
  email?: string;
  password?: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
  authError?: boolean;
};
