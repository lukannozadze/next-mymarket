"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { RequestPasswordReset } from "../actions";
import LanguageSelect from "../shared/LanguageSelect";
import { useState } from "react";
import RequestNotification from "./RequestNotification";
import Loader from "../shared/Loader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "ჩაწერე ელფოსტა" }).min(1),
});

export default function RequestPassword({
  logoPath,
  title,
  email,
  done,
  notification
}: {
  logoPath:string,
  title: string;
  email: string;
  done:string;
  notification:string
}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try{
      const error = await RequestPasswordReset(data);
      if (error === "null") {
        setIsSuccess(true);
      }
    }catch(error){
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }
  
  if(isLoading){
    return <Loader/>
  }

  if (isSuccess) {
    return <RequestNotification notification={notification} />;
  }


  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col  pt-12 max-w-[650px] w-[520px]">
        <div className="w-full flex justify-between pb-3">
          <Image src={logoPath} alt="logo" width={185} height={33} />
          <LanguageSelect />
        </div>
        <div className="flex items-center gap-2 pt-[58px] lg:pt-[92px]">
          <Link href="/login">
            <Image
              src="/icons/left-arrow.svg"
              alt="back"
              width={44}
              height={44}
            />
          </Link>
          <h2 className="w-full text-[28px] font-bold ">{title}</h2>
        </div>
        <div className="w-full flex flex-col items-center gap-4 pt-5">
          <Form {...form}>
          <form
            className="flex flex-col w-full  "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col pb-4 gap-[14px] ">
            <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="w-full p-4 rounded-lg placeholder:text-[16px]"
                          placeholder={email}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
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
              {done}
            </button>
          </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
