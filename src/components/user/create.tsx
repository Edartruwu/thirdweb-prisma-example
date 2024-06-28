"use client";

import { BasicUserData, basicUserData } from "@/validation/userData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import createUser from "@/server/users/createUser";
import { useActiveAccount } from "thirdweb/react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import updateUserByAddress from "@/server/users/updateUserData";
export default function Create() {
  const form = useForm<BasicUserData>({
    resolver: zodResolver(basicUserData),
  });

  const user = useActiveAccount();
  const address = user?.address;

  async function onSubmit(values: BasicUserData) {
    if (address) {
      await createUser(address);
      console.log(values);
      updateUserByAddress(address, values);
    } else {
      console.error("Address is undefined");
    }
  }

  return (
    <div>
      <p>this is your public address: {address}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="insert your desired username"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display username.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="insert your Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="insert your email" {...field} />
                </FormControl>
                <FormDescription>This is your email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update your user data</Button>
        </form>
      </Form>
    </div>
  );
}
