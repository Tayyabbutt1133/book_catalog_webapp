import React from "react";
import Image from "next/image";
import book_cover from '@/public/assets/book_hero.png'
import { lexendDeca, jost } from "@/app/components/fonts/fonts";
import Link from "next/link";

const Hero = () => {
    return (
        <div className=" text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1
                        className={`text-4xl md:text-6xl font-bold mb-6 ${lexendDeca.className}`}
                    >
                        Discover Your Next Favorite Book
                    </h1>
                    <p className={`text-lg md:text-xl text-gray-300 mb-8 ${jost.className}`}>
                        Explore a vast collection of books, from timeless classics to modern
                        bestsellers. Find, track, and enjoy the stories that inspire you.
                    </p>

                    <div className="flex space-x-4 justify-center md:justify-start">
                        <Link href={"/login"}>
                            <button className={`px-6 py-3 cursor-pointer rounded-lg ${lexendDeca.className} bg-indigo-600 hover:bg-indigo-700 transition`}>
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
                    <Image
                        src={book_cover}
                        alt="Hero Illustration"
                        className="rounded-2xl shadow-lg"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
