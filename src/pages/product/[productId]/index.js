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
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
         <Link className="p-2" href="/product">
          &#60; Go back
        </Link>
      </div>

      <div className="font-bold text-lg">Product Details {productId}</div>

      <button
        className="mt-4 px-3 border border-gray-300 rounded-md"
        onClick={() => handleClick() }
        >Place order</button>
    </div>
  );
}
