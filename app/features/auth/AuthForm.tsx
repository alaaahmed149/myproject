"use client";
import { useState } from "react";
import { useAuth } from "./hooks";
import { redirect } from "next/navigation";
import { AtSignIcon, HashIcon } from "lucide-react";
export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { session, signIn } = useAuth();
  if (session) {
    redirect("/");
  }
  return (
    <form
      className="w-[70%] flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        signIn("credentials", { email, password, callbackUrl:'/' },);
      }}
    >
      <label htmlFor="email">Email</label>
      <div className="relative flex items-center ">
        <AtSignIcon className="absolute opacity-50 ml-2" size={18} />
        <input
          className="block pl-8 py-2 w-full rounded-md bg-white "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter email.."
        />
      </div>
      <label htmlFor="password">Password</label>
      <div className="relative flex items-center">
        <HashIcon className="absolute opacity-50 ml-2" size={18} />

        <input
          className="block pl-8 py-2 w-full rounded-md bg-white "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter password.."
        />
      </div>
      <button
        type="submit"
        className="bg-black rounded-md p-2 text-white cursor-pointer mt-4"
      >
        Sign In
      </button>
    </form>
  );
}
