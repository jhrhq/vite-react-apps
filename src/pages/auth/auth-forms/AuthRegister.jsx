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
import { axiosPrimary } from "@/utility/axios-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .min(4, {
        message: "Username must be at least 4 characters.",
      })
      .max(255, {
        message: "Username must not be longer than 255 characters.",
      })
      .trim(),

    email: z
      .string()
      .email("Please enter a valid email address.")
      .min(1, {
        message: "Please enter a valid email address.",
      })
      .max(255, {
        message: "Email must not be longer than 255 characters.",
      })
      .trim(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(64, "Consider using a short password")
      .trim(),
    confirmPassword: z.string().min(1, "Please confirm your password").trim(),
    role: z.boolean().default(false).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password did not match",
  });

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function AuthRegister() {
  const form = useForm({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues,
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const registerData = data?.role
      ? {
          full_name: data.name,
          email: data.email,
          password: data.password,
          role: "admin",
        }
      : { full_name: data.name, email: data.email, password: data.password };

    try {
      const response = await axiosPrimary.post(
        "/api/auth/register",
        registerData
      );
      if (response.status == 201) {
        navigate("/login");
      }
    } catch (err) {
      form.setError("root.random", {
        type: "random",
        message: err.response.data.message,
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block mb-2">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="block mb-2"> Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex  gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="block mb-2">
                  {" "}
                  Enter your Password
                </FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="block mb-2"> Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {form.formState.errors?.root?.random.message && (
          <FormMessage className="-mt-4 mb-4">
            {form.formState.errors?.root?.random.message}
          </FormMessage>
        )}

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

        <Button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg mb-2"
        >
          Create Account
        </Button>
      </form>
    </Form>
  );
}
