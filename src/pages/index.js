import Link from "next/link";

export default function Home() {
  return (
    <div className="m-3 max-w-7xl mx-auto">

      <div className="p-3 mb-3 w-full max-sm:block border-2 border-gray-300 rounded-md flex justify-start">
        <div className="p-2 hover:text-blue-500">
          <Link href="/news">News</Link>
        </div>
        <div className="p-2 hover:text-blue-500">
          <Link href="/posts">Posts</Link>
        </div>
        <div className="p-2 hover:text-blue-500">
          <Link href="/users">Users</Link>
        </div>
        <div className="p-2 hover:text-blue-500">
          <Link href="/product">Products</Link>
        </div>
        <div className="p-2 hover:text-blue-500">
          <Link href="/about">About</Link>
        </div>
        <div className="p-2 hover:text-blue-500">
          <Link href="/blog">Blogs</Link>
        </div>
        <div className="p-2 hover:text-blue-500">
          <Link href="/docs">Documentations</Link>
        </div>
      </div>

      <div className="font-bold text-lg">Home Page</div>

    </div>
  )
}
