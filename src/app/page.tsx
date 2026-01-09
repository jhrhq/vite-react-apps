import SignIn from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className=" flex min-h-svh flex-col items-center justify-center ">
      <div className="w-full ">
        <SignIn />
      </div>
    </div>
  );
}
