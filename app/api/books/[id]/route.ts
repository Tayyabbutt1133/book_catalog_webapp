import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { prisma } from "@/app/utils/prisma";

export async function GET(
    req: NextRequest,
    context: { params: { id: string } }
) {
    try {
        const id = Number(context.params.id);

        const bookbyid = await prisma.book.findUnique({
            where: { id },
        });

        return NextResponse.json(
            { message: "Success", data: bookbyid },
            { status: StatusCodes.OK }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error Occurred" },
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}

export async function DELETE(
    req: NextRequest,
    context: { params: { id: string } }
) {
    try {
        const id = Number(context.params.id);

        await prisma.book.delete({
            where: { id },
        });

        return NextResponse.json(
            { message: "Successfully Deleted" },
            { status: StatusCodes.OK }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error Occurred" },
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}
