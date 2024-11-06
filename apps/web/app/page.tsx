"use client"

import { signOut, useSession } from "@repo/auth/react"
import { Button } from "@repo/design-system/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { data, status } = useSession();
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col space-y-5">
        <h1 className="text-4xl md:text-6xl font-extralight text-center animate-fade-in">
          Welcome to{' '}
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 animate-text-glow">
            Mistral
          </span>{' '}
          Internship Project
        </h1>
        <div>
          {
            status === "authenticated" ? (
              <div className="flex flex-col items-center justify-center space-y-5">
                <h2>Welcome, {data?.user?.name}!</h2>
                <Button onClick={() => signOut()}>Sign out</Button>
              </div>
            ) : (
              <Link href="/signin">
                <Button variant="outline">Get started</Button>
              </Link>
            )
          }
        </div>
      </div>
    </>
  );
}
