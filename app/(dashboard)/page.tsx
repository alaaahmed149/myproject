"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Hello, {session.user?.name}</h1>
    </div>
  );
}
