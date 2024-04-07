"use client";
import { z } from "zod";
import { useForm,Controller } from "react-hook-form";
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
      rules:z.boolean().default(false).optional()
  })
  .refine((data) => data.confirm === data.password, {
    message: "Passwords did not match",
    path: ["confirm"],
  });

export default function RegisterForm() {
  const [passType, setPassType] = useState("password");
  const [confirmType, setConfirmType] = useState("password");
  const [regSuccess,setRegSuccess] = useState(false);
  const router = useRouter();

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
  const showPassImgPath = passType==='password'?'/icons/show-pass.svg':'/icons/hide-pass.svg';
  const showConfirmImgPath = confirmType==='password'?'/icons/show-pass.svg':'/icons/hide-pass.svg';
  const {register,handleSubmit,control,formState} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      name: "",
      lastname: "",
      telephone: "",
      rules:false
    },
  });
 

  //   if(){
  //     router.push('/')
  //   }

  async function onSubmit(data: z.infer<typeof formSchema>) {
     const result = await signUpWithEmailAndPassword(data);

    const { error } = JSON.parse(result);
    if (error) {
      console.log("error", error);
    } else {
      setRegSuccess(true)
    }

    console.log(data);
    
  }
   if(regSuccess){
    return <ConfirmEmail/>
   }
   
  return (
    <div className="flex flex-col pt-12 max-w-[630px] w-[520px]">

      <div className="w-full flex justify-between">
        <Image src="/auth-logo.svg" alt="logo" width={185} height={33} />
        <LanguageSelect />
      </div>
      <form
        className="flex flex-col pt-[58px] items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="w-full text-3xl pb-6 font-bold">ანგარიშის შექმნა</h2>
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col  ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("email")}
                type="text"
                placeholder="ელფოსტა"
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
            <div className="relative w-full flex flex-col 
             ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("password")}
                type={passType}
                placeholder="პაროლი"
              />
                  <Image
                    onClick={showPassClickHandler}
                    src={showPassImgPath}
                    alt="error"
                    width={24}
                    height={24}
                    className="absolute right-4 bottom-[30%] cursor-pointer"
                  />
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

            <div className="relative w-full flex flex-col  ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("confirm")}
                type={confirmType}
                placeholder="გაიმეორე პაროლი"
              />
              <Image
                    onClick={showConfirmClickHandler}
                    src={showConfirmImgPath}
                    alt="error"
                    width={24}
                    height={24}
                    className="absolute right-4 bottom-[30%] cursor-pointer"
                  />
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
              <GenderRadio />
            </div>
            <div className="w-full flex flex-col pt-4  ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("name")}
                type="text"
                placeholder="სახელი"
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
            <div className="w-full flex flex-col">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("lastname")}
                type="text"
                placeholder="გვარი"
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
            <div className="w-full flex flex-col  ">
              <Input
                className="w-full p-4 rounded-lg placeholder:text-[16px]"
                {...register("telephone")}
                type="text"
                placeholder="ტელეფონის ნომერი"
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
              <Checkbox {...register("rules")} className="w-5 h-5" />
              <span>ვეთანხმები <Link className="text-[#3C74FF]" href='/'>წესებსა და პირობებს</Link></span>
              
            </div>
            
            <div className="w-full flex items-center gap-3">
              <Checkbox className="w-5 h-5" />
              <span>ვეთანხმები <Link className="text-[#3C74FF]" href='/'>კონფიდენციალობის პოლიტიკას</Link></span>
            </div>
          </div>
          <button
            onClick={() => console.log(formState.errors)}
            className="mt-4 w-full text-white bg-[#3C74FF] rounded-full py-3"
            type="submit"
          >
            დადასტურება
          </button>
        </div>
      </form>

      <div className="flex justify-center gap-2 mt-10 mb-[75px]">
        <span className="text-[#979797]">არსებული ანგარიშით</span>
        <Link className="text-[#3C74FF] hover:text-black" href="/login">
          შესვლა
        </Link>
      </div>
    </div>
  );
}
