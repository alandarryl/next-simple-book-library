
import connect from "@/lib/db";
import { NextResponse } from "next/server";
import imagePost from "@/models/imagePost";


export async function POST(req) {
    try {
        await connect()

        const formData = await req.formData()

        const imageCreate =  await imagePost.create(formData)

        return NextResponse.json({result: imageCreate},{status: 201});

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


export async function GET(req) {
    try {
        await connect()

        const allImage =  await imagePost.find()

        return NextResponse.json({result: allImage},{status: 200});

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


