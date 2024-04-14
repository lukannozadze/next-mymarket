"use client";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpWithEmailAndPassword } from "../actions";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import LanguageSelect from "../shared/LanguageSelect";
import { useState } from "react";
import { GenderRadio } from "./GenderRadio";
import { log } from "console";
import ConfirmEmail from "./ConfirmEmail";
import { useLocale } from "next-intl";
import Loader from "../shared/Loader";

const formSchema = z
  .object({
    email: z.string().email({ message: "Enter the Email" }).min(1),
    password: z.string().min(6, {
      message: " must contain at least 6 character(s).",
    }),
    confirm: z.string().min(6),

    name: z
      .string()
      .min(1, {
        message: "Write First Name",
      })
      .regex(/^[a-zA-Z]+$/, {
        message: "Must Contain Only Letters",
      }),
    lastname: z
      .string()
      .regex(/^[a-zA-Z]+$/, {
        message: "Must Contain Only Letters",
      })
      .min(1, {
        message: "Write Last Name",
      }),
    telephone: z
      .string()
      .regex(/^[0-9]*$/, {
        message: "Must Contain Only Numbers",
      })
      .max(9)
      .min(9, {
        message: "Wrong format number",
      }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Passwords did not match",
    path: ["confirm"],
  });

export default function RegisterForm({
  logoPath,
  title,
  email,
  password,
  repeat,
  gender,
  male,
  female,
  name,
  lastname,
  telephone,
  termsStart,
  termsEnd,
  policyStart,
  policyEnd,
  confirm,
  redirectQuestion,
  redirectAction,
  confirmEmailText
}: {
  logoPath: string;
  title: string;
  email: string;
  password: string;
  repeat: string;
  gender: string;
  male: string;
  female: string;
  name: string;
  lastname: string;
  telephone: string;
  termsStart: string;
  termsEnd: string;
  policyStart: string;
  policyEnd: string;
  confirm: string;
  redirectQuestion: string;
  redirectAction: string;
  confirmEmailText:string
}) {
  const [passType, setPassType] = useState("password");
  const [confirmType, setConfirmType] = useState("password");
  const [regSuccess, setRegSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const localeActive = useLocale();

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
  const { register, handleSubmit, control, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      name: "",
      lastname: "",
      telephone: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try{
      const result = await signUpWithEmailAndPassword(data);
      const { error } = JSON.parse(result);
      if (!error) {
        setRegSuccess(true);
      }
    }catch(error){
        console.log(error);
    }finally{
       setIsLoading(false);
    }

  }
  if (regSuccess) {
    return <ConfirmEmail text={confirmEmailText} />;
  }

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="flex flex-col pt-12 max-w-[630px] w-[520px]">
      <div className="w-full flex justify-between items-center">
        <Image src={logoPath} alt="logo" width={185} height={33} />
        <LanguageSelect />
      </div>
      <form
        className="flex flex-col pt-[58px] items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="w-full text-3xl pb-6 font-bold">{title}</h2>
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col gap-[14px] ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("email")}
                type="text"
                placeholder={email}
              />
              {formState.errors.email && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {formState.errors.email.message}
                  </span>
                </div>
              )}
            </div>
            <div
              className="w-full flex flex-col gap-[14px]
             "
            >
              <div className="relative">
                <Input
                  className="w-full p-4 rounded-lg placeholder:text-[16px]"
                  {...register("password")}
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
              {formState.errors.password && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {formState.errors.password.message}
                  </span>
                </div>
              )}
            </div>

            <div className="w-full flex flex-col gap-[14px] ">
              <div className="relative">
                <Input
                  className="w-full p-4 rounded-lg placeholder:text-[16px]"
                  {...register("confirm")}
                  type={confirmType}
                  placeholder={repeat}
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
              {formState.errors.confirm && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {formState.errors.confirm.message}
                  </span>
                </div>
              )}
            </div>
            <div className="w-full flex text-gray-500">
              <GenderRadio gender={gender} male={male} female={female} />
            </div>
            <div className="w-full flex flex-col pt-4 gap-[14px] ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("name")}
                type="text"
                placeholder={name}
              />
              {formState.errors.name && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {formState.errors.name.message}
                  </span>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col gap-[14px]">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("lastname")}
                type="text"
                placeholder={lastname}
              />
              {formState.errors.lastname && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {formState.errors.lastname.message}
                  </span>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col gap-[14px]  ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("telephone")}
                type="text"
                placeholder={telephone}
              />
              {formState.errors.telephone && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {formState.errors.telephone.message}
                  </span>
                </div>
              )}
            </div>
            <div className="w-full flex items-center gap-3">
              <Checkbox className="w-5 h-5" />
              <span>
                {termsStart}{" "}
                <Link className="text-[#3C74FF]" href="/">
                  {termsEnd}
                </Link>
              </span>
            </div>

            <div className="w-full flex items-center gap-3">
              <Checkbox className="w-5 h-5" />
              <span>
                {policyStart}{" "}
                <Link className="text-[#3C74FF]" href="/">
                  {policyEnd}
                </Link>
              </span>
            </div>
          </div>
          <button
            onClick={() => console.log(formState.errors)}
            className="mt-4 w-full text-white bg-[#3C74FF] rounded-full py-3"
            type="submit"
          >
            {confirm}
          </button>
        </div>
      </form>

      <div className="flex justify-center gap-2 mt-10 mb-[75px]">
        <span className="text-[#979797]">{redirectQuestion}</span>
        <Link
          className="text-[#3C74FF] hover:text-black"
          href={`/${localeActive}/login`}
        >
          {redirectAction}
        </Link>
      </div>
    </div>
  );
}
