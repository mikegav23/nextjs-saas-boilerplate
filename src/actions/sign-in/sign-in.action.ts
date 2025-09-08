"use server";

import { createClient } from "@/supabase/server";
import { SignInActionState, SignInSchema } from "./sign-in.shared";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signIn(
  _prevState: SignInActionState,
  form: FormData
): Promise<SignInActionState> {
  const supabase = await createClient();

  const email = form.get("email") as string;
  const password = form.get("password") as string;

  const validatedFields = SignInSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      email,
      password,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signInWithPassword(
    validatedFields.data
  );

  if (error) {
    return {
      email,
      password,
      authError: true,
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
