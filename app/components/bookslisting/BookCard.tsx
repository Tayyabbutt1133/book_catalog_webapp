"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaBookOpen, FaTrash } from "react-icons/fa";
import { lexendDeca } from "../fonts/fonts";
import DeleteModal from "./DeleteModal";
import { BiDetail } from "react-icons/bi";



type Book = {
    id: string;
    genre: string;
    author: string;
    title: string;
};

type BookCardProps = {
    list_books: Book[];
    refreshbooks: () => void;
};

const BookCard = ({ list_books, refreshbooks }: BookCardProps) => {


    const [showModal, setshowModal] = useState(false);
    const [bookId, setbookId] = useState('');


    const handleOpen = (id: string) => {
        // console.log("Clicks")
        setbookId(id)
        setshowModal(true);

    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {list_books.map((book) => (
                <div
                    key={book.id}
                    className={`bg-white hover:scale-95 rounded-2xl ${lexendDeca.className} shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden`}
                >
                    <div className="h-40 bg-gradient-to-br from-indigo-200 to-indigo-400 flex items-center justify-center text-white">
                        <FaBookOpen size={60} />
                    </div>
                    <div className={`p-4 flex flex-col space-y-2`}>
                        <h2 className="text-xl font-bold text-gray-800 truncate">{book.title}</h2>
                        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full w-fit">
                            {book.genre}
                        </span>
                        <p className="text-gray-600 text-sm">by {book.author}</p>
                    </div>
                    <div className=" flex justify-between items-center px-4 pb-4">
                        <button onClick={() => handleOpen(book.id)} className={`bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 ${lexendDeca.className}`}>
                            <FaTrash className="w-5 h-5" />
                            <span>Delete</span>
                        </button>
                        <Link href={`/dashboard/book/${book.id}`} className={`bg-slate-700 cursor-pointer hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 ${lexendDeca.className}`}>
                            <BiDetail className="w-5 h-5" />
                            <span>Detail</span>
                        </Link>
                    </div>
                </div>
            ))}

            {showModal && bookId && (
                <DeleteModal
                    bookid={bookId}
                    onClose={() => setshowModal(false)}
                    onDelete={() => refreshbooks()} // need to pick refresh data through callback upon deletion
                />
            )}
        </div>


    );
};

export default BookCard;
