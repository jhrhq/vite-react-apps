import Button from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const defaultValues = {
  username: "",
  password: "",
};

const LoginFormSchema = z.object({
  username: z.union([
    z
      .string()
      .email("Please enter a valid email address.")
      .min(1, {
        message: "Email must be at least 2 characters.",
      })
      .max(255, {
        message: "Email must not be longer than 255 characters.",
      })
      .trim(),
    z.string().min(1, "Username is required").max(100).trim(),
  ]),

  password: z
    .string()
    .min(8, "Please choose at least  8 characters to create your password")
    .max(255, "Consider using a short password")
    .trim(),
});

const AuthLogin = () => {
  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Enter your username or email address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username or email address"
                  type="text"
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
            <FormItem className="mb-6">
              <FormLabel>Enter your Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mb-6 flex gap-2 items-center">
          <input
            type="checkbox"
            id="admin"
            className="px-4 py-3 rounded-lg border border-gray-300"
          />
          <label htmlFor="admin" className="block ">
            Login as Admin
          </label>
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  );
};

export default AuthLogin;
