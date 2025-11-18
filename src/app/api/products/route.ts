import { connectToDatabase } from "@/lib/mongodb";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";
import { IProduct } from "@/types/productType";


export async function GET() {
    try {
        await connectToDatabase();
        const products = await Product.find({}) as IProduct[];
        return NextResponse.json(products, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({err, message: 'Internal Server Error' }, { status: 500 })
    }
}