"use client"
import React, { useState } from 'react';
import { addBookSchema } from '@/app/utils/schema/books.schema';
import { toast } from 'react-toastify'
import { lexendDeca } from '@/app/components/fonts/fonts';
import axios from 'axios';
import Spinner from '@/app/components/landingpage/Spinner';
import { redirect } from 'next/navigation';


const AddForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
  });
  const [spinnerload, setSpinnerLoad] = useState(false);


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSpinnerLoad(true);

    const validateData = addBookSchema.safeParse(formData);
    // console.log("Validation response : ", validateData);
    if (validateData.success === false) {
      setSpinnerLoad(false);
      const messages = validateData.error.issues.map(issue => issue.message)[0];
      toast.error(messages);
      return;
    }
    else {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books`, formData, {
        headers: {
          "Content-Type": 'application/json'
        }
      })

      if (response.status) {
        toast.success("Book Successfully Added")
        setSpinnerLoad(false);
        redirect('/dashboard')
      } else {
        toast.error("Error")
      }
    }
  };


  if (spinnerload) return <Spinner />

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Add a New Book</h2>

        <div className="mb-4">
          <label className={`block text-white mb-1 ${lexendDeca.className}`}>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 text-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className={`block text-white mb-1 ${lexendDeca.className}`}>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className={`block text-white mb-1 ${lexendDeca.className}`}>Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-slate-950 hover:bg-slate-900 cursor-pointer  text-white py-2 rounded-md transition duration-300"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddForm;
