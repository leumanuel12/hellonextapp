import Link from "next/link";

export default function About() {
  return (
    <div className="m-3">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          Go back
        </Link>
      </div>

      <h2>About Page</h2>
    </div>
  );
}
