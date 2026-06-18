import {
  SignCover,
  SignIn,
} from "@home-inventory/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <div className=" flex min-h-svh flex-col items-center justify-center ">
      <div className="w-full ">
        <div className="h-full w-full">
          <div className="h-dvh lg:grid lg:grid-cols-6">
            <SignCover />
            {/* Right column */}
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
