"use server";

import createSupabaseServerClient from "../supabase/server";

export default async function readUserSession() {
  const supebase = await createSupabaseServerClient();

  return supebase.auth.getSession();
  
}
