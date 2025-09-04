import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from 'zod'
import { StatusCodes } from 'http-status-codes'
import { prisma } from "@/app/utils/prisma";


const bookSchema = z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
})




export async function GET() {

    try {

        const allbooks = await prisma.book.findMany();

        return NextResponse.json({
            books: allbooks.reverse()
        },
            { status: StatusCodes.OK }
        )

    } catch (error) {

        return NextResponse.json({
            sucess: false,
            message : error
        }, {
            status: StatusCodes.BAD_GATEWAY
        })

    }

}


export async function POST(request: NextRequest) {

    try {

        const body = await request.json();
        const data = bookSchema.parse(body);
        const { author, genre, title } = data;


        await prisma.book.create({
            data: {
                author,
                genre,
                title
            }
        })

        return NextResponse.json({
            message: "Book created",
            book: { title, author, genre }
        },
            { status: StatusCodes.OK }
        )

    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.issues.map(issue => issue.message)[0];

            return NextResponse.json(
                { success: false, message: messages },
                { status: StatusCodes.BAD_REQUEST }
            );
        }
        return NextResponse.json(
            { success: false },
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}




