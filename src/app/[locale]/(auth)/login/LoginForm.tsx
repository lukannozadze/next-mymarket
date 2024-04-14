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
import LanguageSelect from "../shared/LanguageSelect";
import { useState } from "react";
import { useLocale } from "next-intl";
import Loader from "../shared/Loader";

const formSchema = z.object({
  email: z.string().email({ message: "Enter the Email" }).min(1),
  password: z.string().min(6, {
    message: "must contain at least 6 character(s).",
  }),
});


export default function LoginForm({
  logoPath,
  title,
  email,
  password,
  recover,
  login,
  redirectQuestion,
  redirectAction,
}: {
  logoPath:string,
  title: string;
  email: string;
  password: string;
  recover: string;
  login: string;
  redirectQuestion: string;
  redirectAction: string;
}) {
  const [passType, setPassType] = useState("password");
  const [isLoading,setIsLoading] = useState(false);
  const { toast } = useToast();
   const localeActive = useLocale();
  const showPassClickHandler = () => {
    if (passType === "text") {
      setPassType("password");
    } else {
      setPassType("text");
    }
  };
  const showPassImgPath =
    passType === "password" ? "/icons/show-pass.svg" : "/icons/hide-pass.svg";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const result = await signInWithEmailAndPassword(data);
    try{
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
    }catch(error){
       console.log(error);
    }finally{
      console.log('done');
      setIsLoading(false);
      
    }
  }
  if(isLoading){
    return <Loader/>
  }
  return (
    <div className="flex flex-col  pt-12 max-w-[650px] w-[520px] relative">
      <div className="w-full flex justify-between items-center">
        <Image src={logoPath} alt="logo" width={185} height={33} />
        <LanguageSelect />
      </div>
      <h2 className="w-full text-[32px] font-bold pt-[58px]">{title}</h2>
      <div className="w-full flex flex-col items-center gap-4 pt-12">
        
        <form
          className="flex flex-col w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col gap-[14px]  ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...form.register("email")}
                type="text"
                placeholder={email}
              />
              {form.formState.errors.email && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000] ">
                    {form.formState.errors.email.message}
                  </span>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col pb-6 gap-[14px]">
              <div className="relative">
                <Input
                  className="w-full p-4 rounded-lg placeholder:text-[16px]"
                  {...form.register("password")}
                  type={passType}
                  placeholder={password}
                />
                <Image
                  onClick={showPassClickHandler}
                  src={showPassImgPath}
                  alt="error"
                  width={24}
                  height={24}
                  className="absolute right-4 bottom-[28%] cursor-pointer"
                />
              </div>
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
            </div>
          </div>
          <div className="flex justify-end pb-8 font-medium">
            <Link href={`/${localeActive}/request-password`}>{recover}</Link>
          </div>
          <button
            onClick={() => console.log(form.formState.errors)}
            className="w-full text-white bg-[#3C74FF] rounded-full py-3"
            type="submit"
          >
            {login}
          </button>
        </form>
      </div>

      <div className="flex gap-2  justify-center pt-10">
        <span className="text-[#979797]">{`${redirectQuestion}  — `}</span>
        <Link href={`/${localeActive}/register`} className="text-[#3C74FF] hover:text-black">
          {redirectAction}
        </Link>
      </div>
    </div>
  );
}
