import Link from "next/link";


export default function NotFound() {
    return (
    
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          &#60; Home
        </Link>
      </div>
        {/* by naming the file "404.js" next will automatically make this a default 404 page. */}
      <div className="font-bold text-lg flex justify-center">ERROR. Page not found!</div>
    </div>
    )
};
