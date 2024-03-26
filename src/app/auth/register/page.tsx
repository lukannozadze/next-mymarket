"use client";
import { z, } from "zod";
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpWithEmailAndPassword } from "../actions";
const formSchema = z
.object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password is required.",
    }),
    confirm: z.string().min(6, {
      message: "Password is required.",
    }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Password did not match",
  });


export default function RegisterForm() {
   const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),

    defaultValues: {
      email:'',
      password:'',
      confirm:''
    }
   })
    
  async function onSubmit(data:z.infer<typeof formSchema>){

    const result = await signUpWithEmailAndPassword(data);

    const {error} = JSON.parse(result);
    if(error){
      console.log('error');
    }else{
      console.log('success');
    }
  } 
    return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input {...form.register('email')} type="text" />
      <input {...form.register('password')} type="password" />
      <input {...form.register('confirm')} type="password" />
      <button type="submit">sub</button>
    </form>
  );
}

   