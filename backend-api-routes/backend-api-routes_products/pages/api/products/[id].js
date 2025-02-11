import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query; // Extract id from request query

  // console.log(id);

  // response.status(200).json(getProductById(id));

  const product = getProductById(id);
  console.log("Product:", product);
  if (!product) {
    response.status(404).json({ status: "Not Found" });
    return;
  }
  response.status(200).json(product);
}
