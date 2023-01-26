import { useRouter } from "next/router"

export default function ProductDetails(){

    const router = useRouter();
    const { productId } = router.query;

    console.log(productId)

    return <div>Product Details {productId}</div>
}