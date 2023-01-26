import Link from "next/link";

export default function Home() {
  return (
    <div className="m-3">

      <div className="p-3 mb-3 border-2 border-gray-300 rounded-md max-sm:flex">
        <Link className="p-2" href="/about">About</Link>
        <Link className="p-2" href="/product">Products</Link>
        <Link className="p-2" href="/blog">Blogs</Link>
        <Link className="p-2" href="/docs">Documentations</Link>
      </div>

      <h2>Home Page</h2>

    </div>
  )
}
