import axios from "axios";
import Link from "next/link";



// (4) before we can access the data, we are required to use getStaticPaths so that Nextjs will know what ID's we are going to pre-render.
export async function getStaticPaths() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  const result = await response.data;

  //console.log(result.map( posts => { return { params: { postId: posts.id.toString() } } } ).splice(0,10));

  const ids = result.map((posts) => {
                return { params: { postId: posts.id.toString() } }; //aternative using back ticks to determine as string: `${posts.id}`
            });

  return {
    paths: ids,
    fallback: false,
  };
}

// (2) Before we do that, we need to add a parameter to the getStaticProps, convention name is "context". but can be name any.
export async function getStaticProps(ctx) {

  // (3) inside the "ctx" object, we have can now get the passed id "postId" from params object
  const { postId } = ctx.params;
  //console.log(ctx)
  //console.log(ctx.params)

  // (1) First we get the individual post by appending the postId in the url
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const result = await response.data;

  return {
    props: {
      post: result,
    },
  };
}

export default function Post({ post }) {
  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/posts">
          &#60; Posts List
        </Link>
      </div>

      <div className="font-bold text-lg">Posts Page</div>

      <div className="mt-4 max-w-xl">
        <div className="my-2 p-2" key={post.id}>
          <p className="font-medium text-lg">
            {post.id} - {post.title}
          </p>
          <p className="pl-4 mt-3">{post.body}</p>
        </div>
      </div>
    </div>
  );
}
