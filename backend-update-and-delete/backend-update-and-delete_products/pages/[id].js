import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";
import Button from "@/components/Button";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <p>Loading...</p>; // Always return a component, not exit early
  }

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate(); // Refresh the product data after a successful fetch to update the product detail page.
      event.target.reset();
      setIsEditMode(false);
    }
  }
  // add the handleDeleteProduct function and a delete button
  // Function to handle DELETE request

  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      router.push("/"); // Redirect to home after delete
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  return (
    <ProductCard>
      {isEditMode && (
        <ProductForm onSubmit={handleEditProduct} heading="Edit Product" />
      )}
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <Button type="button" onClick={() => setIsEditMode(!isEditMode)}>
        Edit
      </Button>
      {/* Add DELETE button */}
      <Button type="button" onClick={() => handleDeleteProduct(id)}>
        Delete
      </Button>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
