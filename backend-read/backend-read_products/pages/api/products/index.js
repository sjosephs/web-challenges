import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  // return response.status(200).json(products);
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    response.status(200).json(products);
  } else {
    response.status(404).json({ status: "Not Found" });
  }
}
