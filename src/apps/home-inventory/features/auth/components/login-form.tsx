/** biome-ignore-all lint/a11y/useValidAnchor: false positive */

import * as React from "react";
import { FaArrowRight, FaEye, FaEyeSlash, FaUser } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "@/components/svg/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/* TODO

* Make the form functional
* Study the requirements for login page
* Make a color palette for UI (There are lot of custom colors used in this file)
*/

export function SignCover({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "max-lg:hidden lg:col-span-3 xl:col-span-3 flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100",
        className,
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-center px-6">
        <div className="space-y-12 w-full max-w-125">
          {/* Image wrapper */}
          <div className="relative flex items-center justify-center">
            {/* Top-left blur */}
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

            {/* Bottom-right blur */}
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

            <img
              src={`${import.meta.env.BASE_URL}img/home-inventory.jpg`}
              alt="Image"
              height={500}
              width={500}
              className="relative z-10 w-full max-w-md object-contain dark:hidden"
            />
          </div>

          <div className="text-center">
            <p className="font-semibold text-2xl text-v9">
              Organize Everything
            </p>
            <p className="text-v6">
              Keep track of your belongings, warranties, and important documents
              all in one secure place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SignIn({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-[#F8FAFC] flex h-full flex-col items-center justify-center py-10 sm:px-5 lg:col-span-3 xl:col-span-3",
        className,
      )}
      {...props}
    >
      <div className="w-full max-w-md px-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-1">
            <Logo className="mb-2" />
            <h1 className="text-2xl font-bold text-v9">Home Inventory</h1>
            <span className="text-sm text-v5">
              Track and organize your things
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <Card className="p-0">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex flex-col gap-2 ">
                  <p className="text-v9 font-semibold text-xl text-balance">
                    Sign in to your account
                  </p>
                </div>
                <SignInForm />
              </CardContent>
            </Card>
            <FieldDescription className="text-center font-normal text-v5 text-xs flex flex-col gap-2">
              <span>Version 1.2.4</span>
              <span>
                <a href="#"> Help Center</a> • <a href="#">Privacy Policy</a> •{" "}
                <a href="#">Terms of Service</a>
              </span>
            </FieldDescription>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignInForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <form>
      <FieldGroup className="gap-5">
        <Field className="gap-2">
          <FieldLabel htmlFor="username" className="text-sm font-medium">
            Username
          </FieldLabel>
          <InputGroup className="h-12.5">
            <InputGroupInput
              id="username"
              type="username"
              placeholder="Enter you username"
              value='user'
            />
            <InputGroupAddon align="inline-end">
              <FaUser className="size-3.5 text-v4" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field className="gap-2">
          <FieldLabel htmlFor="password" className="text-sm font-medium">
            Password
          </FieldLabel>

          <InputGroup className="h-12.5">
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={1234}
            />
            <InputGroupAddon align="inline-end">
              <Button
                className="m-0 p-0 size-auto text-v4"
                variant="ghost"
                type="button"
                onClick={togglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </Button>{" "}
            </InputGroupAddon>
          </InputGroup>
        </Field>
        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between gap-y-2">
          <div className="flex items-center gap-3">
            <Checkbox id="rememberMe" className="" />
            <Label htmlFor="rememberMe" className="font-normal text-sm">
              {" "}
              Remember Me
            </Label>
          </div>

          <a
            href="#"
            className="hover:underline text-primary text-sm font-medium"
          >
            Forgot Password?
          </a>
        </div>
        <Field>
          <Button type="submit" asChild>
            <Link to="/dashboard">
              Sign in <FaArrowRight />
            </Link>
          </Button>
        </Field>

        <FieldDescription className="text-center text-sm text-v6">
          Don&apos;t have an account?{" "}
          <a href="#" className="hover:underline text-primary font-medium">
            Sign up
          </a>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
