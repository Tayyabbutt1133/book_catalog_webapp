import { z } from 'zod';

export const addBookSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(30, { message: "Title cannot exceed 30 characters" }),
    
  author: z
    .string()
    .min(1, { message: "Author is required" })
    .max(30, { message: "Author name cannot exceed 30 characters" }),
    
  genre: z
    .string()
    .min(1, { message: "Genre is required" })
    .max(30, { message: "Genre cannot exceed 30 characters" }),
});
