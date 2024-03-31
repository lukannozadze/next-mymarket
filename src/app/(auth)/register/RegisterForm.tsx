"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpWithEmailAndPassword } from "../actions";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

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

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
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

  //   if(){
  //     router.push('/')
  //   }

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const result = await signUpWithEmailAndPassword(data);

    const { error } = JSON.parse(result);
    if (error) {
      console.log("error", error);
    } else {
      //router.push('/')
      setTimeout(() => {
        router.push("/login");
      }, 1000);
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
          <h2 className="w-[60%] text-3xl font-bold">Create Account</h2>
          <div className="w-[100%] flex flex-col items-center gap-3">
            <div className="w-[60%] flex flex-col  ">
              <Input
                className="w-[100%] p-4 rounded-lg"
                {...form.register("email")}
                type="text"
                placeholder="Email"
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
            <div className="w-[60%] flex flex-col  ">
              <Input
                className="w-[100%] p-4 rounded-lg"
                {...form.register("password")}
                type="password"
                placeholder="Password"
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
            </div>

            <div className="w-[60%] flex flex-col  ">
              <Input
                className="w-[100%] p-4 rounded-lg"
                {...form.register("confirm")}
                type="password"
                placeholder="Confirm the Password"
              />
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
            <div className="w-[60%] flex flex-col  ">
              <Input
                className="w-[100%] p-4 rounded-lg"
                {...form.register("name")}
                type="text"
                placeholder="Name"
              />
              {form.formState.errors.name && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {form.formState.errors.name.message}
                  </span>
                </div>
              )}
            </div>
            <div className="w-[60%] flex flex-col  ">
              <Input
                className="w-[100%] p-4 rounded-lg"
                {...form.register("lastname")}
                type="text"
                placeholder="Lastname"
              />
              {form.formState.errors.lastname && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {form.formState.errors.lastname.message}
                  </span>
                </div>
              )}
            </div>
            <div className="w-[60%] flex flex-col  ">
              <Input
                className="w-[100%] p-4 rounded-lg"
                {...form.register("telephone")}
                type="text"
                placeholder="Mobile Number"
              />
              {form.formState.errors.telephone && (
                <div className="flex gap-3 items-center ">
                  <Image
                    src="/icons/error.png"
                    alt="error"
                    width={25}
                    height={25}
                  />
                  <span className=" text-[#FF0000]">
                    {form.formState.errors.telephone.message}
                  </span>
                </div>
              )}
            </div>

            {/* <div className="w-[70%] flex items-center gap-3">
              <Checkbox {...form.register("rule")} className="w-5 h-5" />
              <span>ვეთანხმები წესებსა და პირობებს</span>
            </div> */}
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
        <span className="text-[#979797]">With an existing account</span>
        <Link className="text-[#3C74FF] hover:text-black" href="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}
