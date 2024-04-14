'use server'

import createSupabaseServerClient from "@/lib/supabase/server";
import { useLocale } from "next-intl";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  },);
  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
   
  });
  return JSON.stringify(result);
}

export async function SignOut() {
  const localeActive = useLocale();
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect(`/${localeActive}/login`);
}



export async function RequestPasswordReset(data: { email: string }) {
  const localeActive = useLocale();
  const origin = headers().get("origin");
  const supabase = await createSupabaseServerClient();
  const {error} = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${origin}/${localeActive}/reset-password`,
  });
  return JSON.stringify(error);
}

export async function changePassword(
  data: { password: string },
  code: string | null,
) {
  const supabase = await createSupabaseServerClient();
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return JSON.stringify(error);
    }
  }
  const {error} = await supabase.auth.updateUser({ password: data.password });
  return JSON.stringify(error);
}
