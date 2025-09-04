
import axios from "axios";
import React from "react";
import { lexendDeca } from "../fonts/fonts";
import { toast } from 'react-toastify'

type DeleteModalProps = {
    bookid: string;
    onClose: () => void;
    onDelete: () => void;
};

const DeleteModal = ({ bookid, onClose, onDelete }: DeleteModalProps) => {
    ;

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books/${bookid}`);
            if (res.status === 200) {
                toast.success('Book deleted successfully!');
                onClose();
                onDelete?.();

            } else {
                toast.error('Failed to delete book.');
            }

        } catch (err: any) {
            console.error(err);
            if (err.response?.data?.message) {
                toast.error(err.response.data.message);
            } else {
                toast.error('Error deleting book.');
            }
        }
    };


    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
                <h2 className={`text-xl font-semibold ${lexendDeca.className} mb-4`}>Confirm Delete</h2>
                <p className={`text-gray-700 ${lexendDeca.className} mb-6`}>
                    Are you sure you want to delete this book?
                </p>

                <div className="flex justify-around space-x-4">
                    <button
                        onClick={handleDelete}
                        className={`bg-red-600 ${lexendDeca.className} cursor-pointer hover:bg-red-700 text-white px-4 py-2 rounded-lg`}
                    >
                        Yes
                    </button>
                    <button
                        onClick={onClose}
                        className={`bg-gray-300 ${lexendDeca.className} cursor-pointer hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg`}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
