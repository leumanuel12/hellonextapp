import Link from "next/link";

export default function ProductsList() {
  const paths = [4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="m-3">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          Go back
        </Link>
      </div>

      <h2>Products List Page</h2>

      <div className="max-w-sm inline-block mt-3">

      <button>
        <Link className="p-2" href="/product/1">
          Product 1
        </Link>
      </button>

      <button>
        <Link className="p-2" href="/product/2">
          Product 2
        </Link>
      </button>

      <button>
        {/* note: "replace" Replace the current history state instead of adding a new url into the stack when you click the browser back button inside the "/product/3" page. */}
        <Link className="p-2" href="/product/3" replace>
          Product 3
        </Link>
      </button>

      {paths
        ? paths.map((product) => {
            return (
              <button>
                <Link
                  className="p-2"
                  href={`/product/${product}`}
                >
                  Product {product}
                </Link>
              </button>
            );
          })
        : null}

</div>
    </div>
  );
}
