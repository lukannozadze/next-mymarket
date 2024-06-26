"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassword } from "../actions";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LanguageSelect from "../shared/LanguageSelect";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import Loader from "../shared/Loader";
import { useLocale } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
const formSchema = z
  .object({
    password: z.string().min(6, {
      message: "უნდა შეიცავდეს სულ მცირე 6 სიმბოლოს",
    }),
    confirm: z.string().min(6),
  })
  .refine((data) => data.confirm === data.password, {
    message: "პაროლები არ ემთხვევა",
    path: ["confirm"],
  });

export default function ResetPassword({
  logoPath,
  title,
  password,
  repeat,
  done,
}: {
  logoPath: string;
  title: string;
  password: string;
  repeat: string;
  done: string;
}) {
  const [passType, setPassType] = useState("password");
  const [confirmType, setConfirmType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();

  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");
  const localeActive = useLocale();
  if (!code) {
    router.back();
  }
  if (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: errorDescription,
    });
  }

  const showPassClickHandler = () => {
    if (passType === "text") {
      setPassType("password");
    } else {
      setPassType("text");
    }
  };
  const showConfirmClickHandler = () => {
    if (confirmType === "text") {
      setConfirmType("password");
    } else {
      setConfirmType("text");
    }
  };

  const showPassImgPath =
    passType === "password" ? "/icons/show-pass.svg" : "/icons/hide-pass.svg";
  const showConfirmImgPath =
    confirmType === "password"
      ? "/icons/show-pass.svg"
      : "/icons/hide-pass.svg";
  const form = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const code = searchParams.get("code");
    try {
      const result = await changePassword(data, code);
      //console.log(result);
      const error = JSON.parse(result);
      if (error) {
        toast({
          variant: "destructive",
          title: "Error!",
          description: error.message,
        });
      } else {
        setTimeout(() => {
          router.push(`/${localeActive}/login`);
        }, 1500);
        toast({
          variant: "default",
          title: "Success!",
          description: "Password successfully changed!",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col pt-12 max-w-[630px] w-[520px]">
        <div className="w-full flex justify-between">
          <Image src={logoPath} alt="logo" width={185} height={33} />
          <LanguageSelect />
        </div>
        <Form {...form}>
        <form
          className="flex flex-col pt-[58px] items-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 pt-[58px] lg:pt-[92px] self-start">
              <Link href="/request-password">
                <Image
                  src="/icons/left-arrow.svg"
                  alt="back"
                  width={44}
                  height={44}
                />
              </Link>
              <h2 className="w-full text-[28px] font-bold ">{title}</h2>
            </div>
            <div className="w-full flex flex-col items-center gap-4 pt-8">
              <div
                className="relative w-full flex flex-col gap-[14px]
             "
              >
                <div className="relative">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type={passType}
                            className="w-full p-4 rounded-lg placeholder:text-[16px]"
                            placeholder={password}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
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

              <div className="relative w-full flex flex-col gap-[14px]  ">
                <div className="relative">
                <FormField
                    control={form.control}
                    name="confirm"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type={passType}
                            className="w-full p-4 rounded-lg placeholder:text-[16px]"
                            placeholder={repeat}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Image
                    onClick={showConfirmClickHandler}
                    src={showConfirmImgPath}
                    alt="error"
                    width={24}
                    height={24}
                    className="absolute right-4 bottom-[28%] cursor-pointer"
                  />
                </div>
                {form.formState.errors.confirm && (
                  <div className="flex gap-3 items-center ">
                    <Image
                      src="/icons/error.png"
                      alt="error"
                      width={25}
                      height={25}
                    />
                    <span className=" text-[#FF0000]">
                      {form.formState.errors.confirm.message}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => console.log(form.formState.errors)}
              className="mt-4 w-full text-white bg-[#3C74FF] rounded-full py-3"
              type="submit"
            >
              {done}
            </button>
          </div>
        </form>
        </Form>
      </div>
    </div>
  );
}
