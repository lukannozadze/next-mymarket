"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { resetPassword, signInWithEmailAndPassword } from "../actions";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import LanguageSelect from "../shared/LanguageSelect";
import {useState } from "react";


const formSchema = z.object({
  email: z.string().email({ message: "Enter the Email" }).min(1)
});

export default function LoginForm() {


  const { toast } = useToast();

  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
   await resetPassword(data);

  }
  return (
    <div className="w-full flex items-center justify-center">
    <div className="flex flex-col  pt-12 max-w-[650px] w-[520px]">
      <div className="w-full flex justify-between pb-3">
        <Image src="/auth-logo.svg" alt="logo" width={185} height={33} />
        <LanguageSelect />
      </div>
      <div className="flex items-center gap-2 pt-[58px] lg:pt-[92px]">
      <Link href='/login'><Image src='/icons/left-arrow.svg' alt="back" width={44} height={44}/></Link>
      <h2 className="w-full text-[28px] font-bold ">პაროლის აღდგენა</h2>
      </div>
      <div className="w-full flex flex-col items-center gap-4 pt-5">
        <form
          className="flex flex-col w-full  "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          
            <div className="w-full flex flex-col pb-4 ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...form.register("email")}
                type="text"
                placeholder="ელფოსტა"
              />
              {form.formState.errors.email && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {form.formState.errors.email.message}
                  </span>
                </div>
              )}
            </div>
         
          <button
            onClick={() => console.log(form.formState.errors)}
            className="w-full text-white bg-[#3C74FF] rounded-full py-3"
            type="submit"
          >
            შესვლა
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
