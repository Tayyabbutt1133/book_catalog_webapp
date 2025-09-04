import React from "react";
import { lexendDeca } from "../fonts/fonts";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" text-gray-400">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className={`text-lg ${lexendDeca.className} font-semibold text-white cursor-pointer`}>
                    Bookify
                </div>
                <div className={`flex space-x-6 mt-4 md:mt-0 ${lexendDeca.className}`}>
                    <Link href="/" className="hover:text-white transition">
                        About
                    </Link>
                    <Link href="/" className="hover:text-white transition">
                        Services
                    </Link>
                    <Link href="/" className="hover:text-white transition">
                        Contact
                    </Link>
                </div>
                <div className={`mt-4 md:mt-0 text-sm ${lexendDeca.className}`}>
                    © {new Date().getFullYear()} Bookify. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
