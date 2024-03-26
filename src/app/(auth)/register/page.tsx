"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpWithEmailAndPassword } from "../actions";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password is required.",
    }),
    confirm: z.string().min(6, {
      message: "Password is required.",
    }),
    telephone: z
      .string()
      .max(9)
      .min(9, {
        message: "Wrong format number",
      })
      .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
    rule: z.preprocess((value) => value === "on", z.boolean()),
  })

  .refine((data) => data.confirm === data.password, {
    message: "Password did not match",
  });

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      telephone: "",
      rule: false,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // const result = await signUpWithEmailAndPassword(data);

    // const { error } = JSON.parse(result);
    // if (error) {
    //   console.log("error");
    // } else {
    //   console.log("success");
    // }
    console.log(data);
    console.log("fire");
  }
  return (
    <div className="flex flex-col items-center justify-center mt-16 ">
      <Image src="/auth-logo.svg" alt="auth-tnet" width={185} height={33} />
      <form
        className="flex flex-col pt-[92px] w-[50%] items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="w-[90%] flex flex-col items-center gap-4">
          <h2 className="w-[70%] text-3xl font-bold">ანგარიშის შექმნა</h2>
          <div className="w-[100%] flex flex-col items-center gap-3">
            <Input
              className="w-[70%] p-3 rounded-lg"
              {...form.register("email")}
              type="text"
              placeholder="ელფოსტა"
            />
            <Input
              className="w-[70%] p-3 rounded-lg"
              {...form.register("password")}
              type="password"
              placeholder="პაროლი"
            />
            <Input
              className="w-[70%] p-3 rounded-lg"
              {...form.register("confirm")}
              type="password"
              placeholder="გაიმეორე პაროლი"
            />
            <Input
              className="w-[70%] p-3 rounded-lg"
              {...form.register("telephone")}
              type="text"
              placeholder="ტელეფონის ნომერი"
            />

            <div className="w-[70%] flex items-center gap-3">
              <Checkbox {...form.register("rule")} className="w-5 h-5" />
              <span>ვეთანხმები წესებსა და პირობებს</span>
            </div>
          </div>
          <button
            onClick={() => console.log("ahahahah")}
            className="mt-4 w-[70%] text-white bg-[#3C74FF] rounded-full py-3"
            type="submit"
          >
            დადასტურება
          </button>
        </div>
      </form>
    </div>
  );
}
