"use client"

import { useSession } from "next-auth/react";
import Landingweb from "./(routes)/Landingweb/page";
import { useRouter } from "next/navigation";

export default function Home() {


  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.replace('/dashboard')
  }




  return (
    <>
        <Landingweb />
    </>
  );
}
