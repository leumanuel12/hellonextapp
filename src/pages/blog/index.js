import Link from "next/link";

export default function Blog() {
  return (
    <div className="m-3 max-w-7xl mx-auto">

      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          &#60; Home
        </Link>
      </div>

      <div className="font-bold text-lg">Blog Page</div>

    </div>
  )
}
