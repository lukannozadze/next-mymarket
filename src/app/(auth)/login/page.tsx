import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

import LoginForm from "./LoginForm";

export default async function page() {
  const { data } = await readUserSession();
  if (data.session) {
    redirect("/");
  }
  return (
    <>
      <LoginForm />
    </>
  );
}
