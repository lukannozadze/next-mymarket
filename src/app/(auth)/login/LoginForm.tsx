"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signInWithEmailAndPassword } from "../actions";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { error } from "console";
import LanguageSelect from "../shared/LanguageSelect";
import { useRef, useState } from "react";


const formSchema = z.object({
  email: z.string().email({ message: "Enter the Email" }).min(1),
  password: z.string().min(6, {
    message: " must contain at least 6 character(s).",
  }),
});

export default function LoginForm() {

  const [passType, setPassType] = useState("password");
  const { toast } = useToast();

  const showPassClickHandler = () => {
    if (passType === "text") {
      setPassType("password");
    } else {
      setPassType("text");
    }
  };
  const showPassImgPath = passType==='password'?'/icons/show-pass.svg':'/icons/hide-pass.svg';
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
    if (error?.message) {
      console.log(error.message);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } else {
      console.log("success");
    }

    console.log(data);
  }
  return (
    <div className="flex flex-col  pt-12 max-w-[650px] w-[520px]">
      <div className="w-full flex justify-between">
        <Image src="/auth-logo.svg" alt="logo" width={185} height={33} />
        <LanguageSelect />
      </div>
      <h2 className="w-full text-[32px] font-bold pt-[58px]">ავტორიზაცია</h2>
      <div className="w-full flex flex-col items-center gap-4 pt-12">
        <form
          className="flex flex-col w-full  "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col  ">
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
            <div className="w-full flex flex-col pb-6 relative">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...form.register("password")}
                type={passType}
                placeholder="პაროლი"
              />
              {form.formState.errors.password && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {form.formState.errors.password.message}
                  </span>
                </div>
              )}
              <Image
                onClick={showPassClickHandler}
                src={showPassImgPath}
                alt="error"
                width={24}
                height={24}
                className="absolute right-4 bottom-1/2 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-end pb-8 font-medium">
            <Link href="#">პაროლის აღდგენა</Link>
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

      <div className="flex gap-2  justify-center pt-10">
        <span className="text-[#979797]">{`არ გაქვს ანგარიში?  — `}</span>
        <Link className="text-[#3C74FF] hover:text-black" href="/register">
          შექმენი
        </Link>
      </div>
    </div>
  );
}
