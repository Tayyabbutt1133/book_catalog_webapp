import { NextResponse } from "next/server"
import { StatusCodes } from "http-status-codes"
import { id } from "zod/locales"
import { prisma } from "@/app/utils/prisma"




export async function GET(req: Request, { params }: { params: { id: string } }) {

    console.log(id)

    try {

        const id = Number(params.id)

        const bookbyid = await prisma.book.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json({
            message: "Success",
            data: bookbyid
        }, { status: StatusCodes.OK })



    } catch (error) {
        return NextResponse.json({
            message: "Error Occured"
        }, { status: StatusCodes.INTERNAL_SERVER_ERROR })
    }



}



export async function DELETE(req: Request, { params }: { params: { id: string } }) {

    console.log(id)

    try {

        const id = Number(params.id)

        await prisma.book.delete({
            where: {
                id
            }
        })
        return NextResponse.json({
            message: "Successfully Deleted",
        }, { status: StatusCodes.OK })



    } catch (error) {
        return NextResponse.json({
            message: "Error Occured"
        }, { status: StatusCodes.INTERNAL_SERVER_ERROR })
    }



}

