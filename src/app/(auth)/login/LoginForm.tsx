"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signInWithEmailAndPassword } from "../actions";



const formSchema = z
  .object({
    email: z.string().email({message:'Enter the Email'}).min(1),
    password: z.string().min(6, {
      message: " must contain at least 6 character(s).",
    })          
  })

export default function LoginForm() {
    
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const result = await signInWithEmailAndPassword(data);

    const { error } = JSON.parse(result);
    if (error) {
      console.log("error",error);
    } else {
       console.log('success');
    }

    console.log(data);
    
  }
  return (
    <div className="flex flex-col items-center justify-center mt-16 ">
      <Image src="/tnet-en.svg" alt="auth-tnet" width={185} height={33} />
      <form
        className="flex flex-col pt-[92px] w-[50%] items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="w-[90%] flex flex-col items-center gap-4">
          <h2 className="w-[60%] text-3xl font-bold">Authorization</h2>
          <div className="w-[100%] flex flex-col items-center gap-3">
            <div className="w-[60%] flex flex-col  "> 
              <Input
              className="w-[100%] p-4 rounded-lg"
              {...form.register("email")}
              type="text"
              placeholder="Email"
              />
              {form.formState.errors.email && <div className="flex gap-3 items-center ">
                <Image src='/icons/error.png' alt="error" width={25} height={25}/>
                <span className=" text-[#FF0000]">{form.formState.errors.email.message}</span></div>}
            </div>
            <div className="w-[60%] flex flex-col  "> 
              <Input
              className="w-[100%] p-4 rounded-lg"
              {...form.register("password")}
              type="password"
              placeholder="Password"
              />
              {form.formState.errors.password && <div className="flex gap-3 items-center ">
                <Image src='/icons/error.png' alt="error" width={25} height={25}/>
                <span className=" text-[#FF0000]">{form.formState.errors.password.message}</span></div>}
            </div>
          </div>
          <button
            onClick={() => console.log(form.formState.errors)}
            className="font-bold mt-4 w-[60%] text-white bg-[#3C74FF] rounded-full py-3"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>

      <div className="flex gap-2 mt-5">
      <span className="text-[#979797]">{`Don't have an account?  — `}</span>
      <Link className="text-[#3C74FF] hover:text-black" href='/register'>Create</Link>
      </div>
    </div>
  );
}