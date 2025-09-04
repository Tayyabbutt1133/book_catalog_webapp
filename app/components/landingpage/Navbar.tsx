"use client"

import React from 'react'
import Link from 'next/link'
import { lexendDeca } from '@/app/components/fonts/fonts'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Navbar = () => {

    const { data: session } = useSession()

    return (
        <>

            <div className="flex items-center border border-slate-800 justify-between  text-white px-6 py-4 shadow-md">
               <Link href={'/'}>
                <div className={`text-xl ${lexendDeca.className}  cursor-pointer`}>
                    Books Catalog App
                    </div>
                    </Link>
                <div className="flex justify-center items-center space-x-4">
                    {session ? (
                        <>
                            <button
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className={`px-4 py-2 ${lexendDeca.className} cursor-pointer rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition`}
                            >
                                Log Out
                            </button>
                            <div className='flex justify-center items-center flex-col'>
                                <Image
                                    src={session.user?.image as string}
                                    alt="User Avatar"
                                    width={100}
                                    height={100}
                                    className="w-8 h-8 cursor-pointer rounded-full object-cover"
                                />
                                <p>{session.user?.name}</p>
                            </div>
                        </>
                    ) : (
                        <Link href={"/login"}>
                            <button className={`px-4 py-2 ${lexendDeca.className} cursor-pointer rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition`}>
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>


        </>
    )
}

export default Navbar
