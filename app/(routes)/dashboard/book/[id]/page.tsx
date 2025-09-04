"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiBook } from "react-icons/bi";
import { lexendDeca } from "@/app/components/fonts/fonts";
import Spinner from "@/app/components/landingpage/Spinner";

type Book = {
    id: string;
    title: string;
    genre: string;
    author: string;
};

export default function Page() {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        if (id) {
            const res = axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books/${id}`).then((res) => setBook(res.data.data));
        }
    }, [id]);

    if (!book) return <Spinner />;

    return (
        <div className="max-w-3xl mx-auto my-6 p-8 rounded-3xl shadow-lg border border-slate-800">
            <div className="w-full h-56 text-white  bg-slate-800 rounded-2xl mb-6 flex items-center justify-center text-6xl">
                <BiBook size={90} />
            </div>
            <div className="space-y-4">
                <h1 className={`text-4xl font-bold text-white ${lexendDeca.className}`}>{book.title}</h1>
                <p className={`text-lg text-white font-bold ${lexendDeca.className}`}>Author: <span className="">{book.author}</span></p>
                <p className={`text-lg font-bold text-white ${lexendDeca.className}`}>Genre:
                    <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                        {book.genre}
                    </span>
                </p>
            </div>
        </div>


    );
}
