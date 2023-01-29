import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";


export async function getStaticPaths() {

  const response = await axios.get('http://localhost:4000/products')
  
  const result = response.data.slice(0,2); //limited pre-rendered data=2 to see ISR in action

  const paths = result.map( product => {
    return {
      params: {
        productId: product.id
      }
    }
  } )

  //console.log('id paths=',paths)

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(ctx) {

  //console.log(ctx.params)
  //console.log(ctx.params.productId)

  try {
    const id = ctx.params.productId

    const response = await axios.get(`http://localhost:4000/products/${id}`)
    const result = response.data;
  
    //console.log(result)
  
    return {
      props:{
        product: result
      },
      revalidate: 10, //ISR refresh data after 10 seconds upon request
    }
  } catch (error) {
    console.log(error.message);

    return {
      notFound: true,
    }
  }


}

export default function ProductDetails({ product }) {
  const router = useRouter();
  //const { productId } = router.query;

  //console.log(productId);

  if(router.isFallback){
    return <div className="font-medium">Loading data...</div>
  }

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

      <p className="font-bold text-lg px-3">Product Details</p>

      <div className="m-3 p-3">
        <p>
          <span className="text-blue-500">Product: </span>
          {product.title}</p>
        <p>
          <span className="text-blue-500">Price: </span>
          {product.price}</p>
        <p>
          <span className="text-blue-500">Description: </span>
          {product.description}</p>
      </div>

      <button
        className="mt-4 px-3 border border-gray-300 rounded-md"
        onClick={() => handleClick() }
        >Place order</button>
    </div>
  );
}
