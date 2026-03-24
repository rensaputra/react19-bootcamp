"use server";

import sqlite from "better-sqlite3";
import { redirect } from "next/navigation";
const db = sqlite("products.sqlite");

interface Product {
    id: number;
}

export async function deleteProduct(productId: Product["id"]): Promise<void> {
    db.prepare(`DELETE FROM products WHERE id=?`).run(productId);

    redirect("/");
}
