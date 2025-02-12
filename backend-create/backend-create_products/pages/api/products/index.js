import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect(); // Ensure database connection

  if (request.method === "POST") {
    try {
      const productData = request.body; // Get data from request body
      console.log("productData", productData);
      await Product.create(productData); // Save to MongoDB
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      return response.status(400).json({ error: "Error creating product" });
    }
  }

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
