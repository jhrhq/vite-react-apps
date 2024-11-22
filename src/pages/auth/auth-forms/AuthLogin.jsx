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
import useAuth from "@/hooks/useAuth";
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
    .min(8, "Password must be at least 8 characters")
    .max(255, "Consider using a short password")
    .trim(),
  role: z.boolean().default(false).optional(),
});

const AuthLogin = () => {
  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues,
  });

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data.username, data.password);
    } catch (err) {
      form.setError("username", {
        type: "random",
        message: err.response.data.message,
      });
      form.setError("password", {
        type: "random",
        message: err.response.data.message,
      });
    }
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
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="mb-6 flex gap-2 items-center space-y-0">
              <FormControl>
                <input
                  id="role"
                  type="checkbox"
                  className="px-4 py-3 rounded-lg border border-gray-300"
                  {...field}
                />
              </FormControl>
              <FormLabel htmlFor="role" className="block">
                {" "}
                Register as Admin
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  );
};

export default AuthLogin;
