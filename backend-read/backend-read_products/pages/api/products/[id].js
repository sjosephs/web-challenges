// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  // const product = products.find((product) => product.id === id);

  // if (!product) {
  //   response.status(404).json({ status: "Not Found" });
  //   return;
  // }

  // response.status(200).json(product);

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ message: "Product not found" });
      return;
    }
    response.status(200).json(product);
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
}
