import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { name, description, price, currency, category } = data;
  return (
    <>
      <h1>
        {name} (ID: {id})
      </h1>
      <p>Description: {description} </p>
      <p>
        Price: {price} {currency}
      </p>
      <p>{category}</p>
      <Link href="/products">Back to all</Link>
    </>
  );
}
