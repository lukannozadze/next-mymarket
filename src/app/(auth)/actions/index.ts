"use server";

import createSupabaseServerClient from "@/lib/supabase/server";
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
  });
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

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}

const origin = headers().get("origin");
export async function requestPasswordReset(data: { email: string }) {
  const supabase = await createSupabaseServerClient();
  const {error} = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${origin}/reset-password`,
  });
  return JSON.stringify(error);
}

export async function changePassword(data: { password: string },code:string | null) {
   if(code){
    const supabase = await createSupabaseServerClient();
    const {error} = await supabase.auth.exchangeCodeForSession(code)
    if(error){
       return JSON.stringify(error);
    }
   }
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.updateUser({ password: data.password });
  return JSON.stringify(result);
}
