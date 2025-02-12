import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });

  if (request.method === "PUT") {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, request.body);
      if (updatedProduct) {
        response.status(200).json({ status: "Product successfully updated." });
        return;
      }
      response.status(405).json({ status: "Product not found." });
      return;
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal Server Error." });
      return;
    }
  }

  // Implement DELETE request
  if (request.method === "DELETE") {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (deletedProduct) {
        response.status(200).json({ status: "Product successfully deleted." });
        return;
      }
      response.status(404).json({ status: "Product not found." });
      return;
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal Server Error." });
      return;
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
