import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from "http-status-codes"
import { prisma } from "@/app/utils/prisma"

export async function GET( req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const resolvedParams = await params
        const id = Number(resolvedParams.id)

        if (isNaN(id)) {
            return NextResponse.json({
                success: false,
                message: "Invalid ID format"
            }, { status: StatusCodes.BAD_REQUEST })
        }

        const bookbyid = await prisma.book.findUnique({
            where: {
                id
            }
        })

        if (!bookbyid) {
            return NextResponse.json({
                success: false,
                message: "Book not found"
            }, { status: StatusCodes.NOT_FOUND })
        }

        return NextResponse.json({
            message: "Success",
            data: bookbyid
        }, { status: StatusCodes.OK })

    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json({
            message: "Error Occurred"
        }, { status: StatusCodes.INTERNAL_SERVER_ERROR })
    }
}


export async function DELETE( req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const resolvedParams = await params
        const id = Number(resolvedParams.id)

        if (isNaN(id)) {
            return NextResponse.json({
                success: false,
                message: "Invalid ID format"
            }, { status: StatusCodes.BAD_REQUEST })
        }

        await prisma.book.delete({
            where: {
                id
            }
        })

        return NextResponse.json({
            message: "Successfully Deleted",
        }, { status: StatusCodes.OK })

    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json({
            message: "Error Occurred"
        }, { status: StatusCodes.INTERNAL_SERVER_ERROR })
    }
}