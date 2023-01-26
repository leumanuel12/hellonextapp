import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;

  console.log(productId);

  return (
    <div className="m-3">
      <div className="p-3 mb-3 border-2 border-gray-300 rounded-md max-sm:flex">
        <Link className="p-2" href="/about">
          Home
        </Link>
      </div>

      <Link className="p-2" href="/product">
          Go back
        </Link>

      <div>Product Details {productId}</div>
    </div>
  );
}
