import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <main>
        <h1 className="text-3xl font-bold w-full">School management system</h1>
        <p className="text-lg py-4 font-semibold opacity-65">This is a simple school management system</p>
        <div className="flex items-center justify-center gap-6">
          <Button variant="default">
            <RegisterLink>Sign up</RegisterLink>
          </Button>
          <Button variant="secondary">
            <LoginLink className="">Login</LoginLink>
          </Button>
        </div>
      </main>
    </div>
  );
}
