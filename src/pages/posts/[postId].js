import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";



// (4) before we can access the data, we are required to use getStaticPaths so that Nextjs will know what ID's we are going to pre-render.
export async function getStaticPaths() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  const result = await response.data;

  //console.log(result.map( posts => { return { params: { postId: posts.id.toString() } } } ).splice(0,10));

  const ids = result.map((posts) => {
                return { params: { postId: posts.id.toString() } }; //aternative using back ticks to determine as string: `${posts.id}`
            })
            .slice(0,5); // (A1) here we set the initial data to be shown.

  return {
    paths: ids,
    fallback: true,
    // (A2) if we set fallback to true, data that is outside the pre-rendered data will be rendered by Nextjs upon request...
    // (A3) given that the data by the ID passed exist.
  };
}

// (2) Before we do that, we need to add a parameter to the getStaticProps, convention name is "context". but can be name any.
export async function getStaticProps(ctx) {

  // (3) inside the "ctx" object, we have can now get the passed id "postId" from params object
  const { postId } = ctx.params;
  //console.log(ctx)
  //console.log(ctx.params)

  // (1) First we get the individual post by appending the postId in the url
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    const result = await response.data;

    return {
      props: {
        post: result,
      },
    };

  } catch (error) {

    console.log(error.message);

    // (A4) since we have set fallback=true, we need to return a 404 page for the postId request that are not present in our data
    // (A5) we now encapsulated our axios query inside the trycatch so we can check if the ID existed.
    // (A6) we will then return an object "{ notFound: true, }" which is prebuilt variable to return a 404 page.
    return {
      notFound: true,
    }
  
  }


}

export default function Post({ post }) {

  const router = useRouter();
  //console.log(router)

  // (A7) if we set falback=true in the getStaticPaths, here we can show a loading preview to the user while the data is being rendered by Nextjs
  if(router.isFallback){
    return <div className="font-medium">Loading data...</div>
  }


  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/posts">
          &#60; Posts List
        </Link>
      </div>

      <div className="font-bold text-lg">Posts ID : {post.id}</div>

      <div className="mt-4 max-w-xl">
        <div className="my-2 p-2" key={post.id}>
          <p className="font-medium text-lg text-blue-500">{post.title}</p>
          <p className="p-4 mt-3 border border-gray-300 rounded-md">{post.body}</p>
        </div>
      </div>
    </div>
  );
}
