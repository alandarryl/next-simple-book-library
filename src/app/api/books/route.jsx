
import connect from "@/lib/db";
import { NextResponse } from "next/server";
import book from "@/models/book";

export async function POST(req) {
    try {
        //

        await connect();

        const formData = await req.formData();

        const data = Object.fromEntries(formData.entries());

        if(!data) return NextResponse.json({message: "Error of entry"}, {status: 404});

        const bookCreate = await book.create(data);

        return NextResponse.json({result: bookCreate}, {status: 201});

    } catch (error) {
        //
        return NextResponse.json({error: error.message}, {status: 500});
    }
}


export async function GET(req) {
    try {
        //
    } catch (error) {
        //
    }
}
