import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
     <main>
      <h1 className="text-3xl font-bold underline">School management system</h1>
      <p className="text-lg">This is a simple school management system</p>
      <div className="flex items-center justify-center">
        <RegisterLink>Sign up</RegisterLink>
        <LoginLink className="ml-4">Login</LoginLink>
      </div>
     </main>
    </div>
  );
}
