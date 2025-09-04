import React from "react"
import { lexendDeca } from "./fonts/fonts"
import Link from "next/link"

const Button = () => {
    return (
        <Link href={'/dashboard/add-form'}>
        <button className={`px-4 mt-4 py-2 ${lexendDeca.className} bg-slate-600 text-white font-medium rounded-lg shadow hover:bg-slate-500 cursor-pointer transition duration-200`}>
            Add Book
            </button>
            </Link>
    )
}

export default Button
