import Link from "next/link";

export default function FirstBlog() {
    return (
        <div className="m-3 max-w-7xl mx-auto">

      <div className="p-3 mb-3">
          <Link href="/blog">
            &#60; Go back
          </Link>
      </div>

      <div className="font-bold text-lg">First Blog Page</div>

    </div>
    )
};
