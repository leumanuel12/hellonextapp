import Link from "next/link";
import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();

  /*
       (1) [...] this is a "Catch All Route". meaning whatever segments you add on the link will return on this page.
       (2) example "localhost:3000/docs/feature1/concept1/". the segments in the url can be caught using the "useRouter"
       (3) by default, params will return undefined since nextjs will pre-render the component
       (4) to avoid getting undefine in run time, just set it as empty array. params is an array
       (5) "params" is only a naming convention, can name it whatever you want.
    */
  const { params = [] } = router.query;

  console.log(params);

  // (6) lets assume we have "feature1" and "concept1" in the url: "localhost:3000/docs/feature1/concept1/"
  if (params.length === 2)
    return (
      <h2>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h2>
    );
  if (params.length === 1) return <h2>Viewing docs for feature {params[0]}</h2>;

  // (7) now, if we try to view only the documentation home page through "localhost:3000/docs", this will return a 404 page. to fix, we will use an optional "Catch All Routes".
  // (8) by wrapping the the filename with another bracket like this -> [[...params]], we can now view the default docs page.
  return (
    <div className="m-3">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          Go back
        </Link>
      </div>

      <h2>Documentation Home Page</h2>
    </div>
  );
}
