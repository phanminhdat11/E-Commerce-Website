import { NextResponse } from "next/server";
import product from "@/data/products.json"

export async function GET(){
    return NextResponse.json(product)
}