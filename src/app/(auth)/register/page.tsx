import readUserSession from "@/lib/actions"
import { redirect } from "next/navigation";

import RegisterForm from "./RegisterForm";


export default async function registerPage() {
   const {data} = await readUserSession();
   if(data.session){
    redirect('/');
   }
  return (
    <>
     <RegisterForm/>
    </>
  )
}
