import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;

  console.log(productId);

  function handleClick(){
    alert('Order placed!');
    router.push('/product'); //push is similar to useNavigate in react.
  }

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

      <button
        className="mt-4 px-3 border border-gray-300 rounded-md"
        onClick={() => handleClick() }
        >Place order</button>
    </div>
  );
}
