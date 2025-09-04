"use client"

import React from "react";
import Image from "next/image";
import book_cover from '@/public/assets/book_hero.png'
import Loginbtn from "@/app/components/authentication/login-btn";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {

  const { data: session } = useSession()
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-black via-gray-900 to-black  min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <Image
          src={book_cover}
          alt="Books"
          width={600}
          height={800}
          className="object-cover w-full h-auto md:h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <Loginbtn />
      </div>
    </div>

  );
};

export default Login;
