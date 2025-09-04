"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { lexendDeca } from "../fonts/fonts"
import google_icon from '@/public/assets/google.png'
import Image from "next/image"

export default function Loginbtn() {
    return (
        <>
            <button
                onClick={() => signIn("google")}
                className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md shadow hover:shadow-md transition bg-white border border-gray-300 text-gray-700 ${lexendDeca.className}`}
            >
                <Image
                    src={google_icon}
                    alt="Google"
                    className="w-5 h-5"
                />
                Sign in with Google
            </button>

        </>
    )
}