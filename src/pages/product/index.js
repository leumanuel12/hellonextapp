import axios from "axios";
import Link from "next/link";


export async function getStaticProps() {

  const response = await axios.get('http://localhost:4000/products')
  const result = response.data;

  //console.log(result)

  return {
    props:{
      products: result
    },
    revalidate: 10,  //ISR refresh data after 10 seconds upon request
  }
}

export default function ProductsList({ products }) {

  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          &#60; Home
        </Link>
      </div>

      <div className="font-bold text-lg">Products List Page</div>

      <div className="max-w-sm mt-3">

      {products
        ? products.map((product) => {
            return (
              <div
                  key={product.id}
                  className="my-3 max-w-xs p-2">
                  <button>
                  <Link
                    className="p-2 hover:text-blue-500"
                    href={`/product/${product.id}`}
                  >
                    {product.title}
                  </Link>
                </button>
              </div>
            );
          })
        : null}

</div>
    </div>
  );
}
