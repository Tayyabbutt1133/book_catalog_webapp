"use client";
import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import Spinner from "../landingpage/Spinner";
import { lexendDeca } from "../fonts/fonts";

const Listing = () => {
    const [books, setBooks] = useState(null);
    const [bookscount, setBookscount] = useState(0);

    const fetchBooks = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/books`);
        const count = res.data.books.length 

        setBooks(res.data.books);
        setBookscount(count);
    };

    useEffect(() => {
        fetchBooks();
    }, []);


    if (!books) return <Spinner />



    return (
        <main className="p-6">
            <div className="flex sm:flex-row flex-col justify-between items-center">
                <h1 className="text-2xl text-white font-bold mb-4">Books</h1>
                <h1 className={`${lexendDeca.className}`}>{`Current Available books on Platform : ${bookscount}`}</h1>
            </div>
            <BookCard list_books={books} refreshbooks={fetchBooks} />
        </main>
    );
};

export default Listing;
