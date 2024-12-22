"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaLock, FaUser } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[400px] flex flex-col items-center justify-center w-full gap-y-8">
      <div>
        <h1 className="uppercase text-3xl text-center">
          Pagos <span className="text-[#01a1e3]">MFLAcademy</span>
        </h1>
        <p className="text-center uppercase text-gray-500">Proper English</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-16 w-full"
        >
          <div className="flex flex-col gap-y-8 w-[70%] mx-auto">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex items-center gap-x-4 flex-col items-start">
                  <FormLabel>
                    <FaUser size={24} className="text-[#01a1e3]" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-0 border-b-2 border-[#01a1e3] rounded-none focus-visible:ring-0 py-4 px-1 placeholder:text-gray-400"
                      type="email"
                      placeholder="student@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex items-center gap-x-4 flex-col items-start">
                  <FormLabel>
                    <FaLock size={24} className="text-[#01a1e3]" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      className="border-0 border-b-2 border-[#01a1e3] rounded-none focus-visible:ring-0 py-4 px-1 placeholder:text-gray-400"
                      placeholder="********"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Checkbox />
          </div>
          <Button
            type="submit"
            className="bg-[#01a1e3] w-[280px] mx-auto flex justify-center py-8 rounded-full font-bold text-white text-lg hover:bg-[#0d8baf]"
          >
            Inicia sesión
          </Button>
        </form>
      </Form>
    </div>
  );
}
