import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const result = await response.data;

  //console.log(result)

  return {
    props: {
      posts: result.slice(0, 10), //manual limiting to 10
    },
  };
}

export default function PostsList({ posts }) {
  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          &#60; Home
        </Link>
      </div>

      <div className="font-bold text-lg">Posts List Page</div>

      <div className="mt-4 max-w-md">
        {posts.map((post) => {
          return (
            <div
              className="my-3 p-2 border border-gray-300 rounded-md hover:bg-blue-100"
              key={post.id}
            >
              <Link href={`/posts/${post.id}`}>
                <p className="font-medium text-blue-500">
                  {post.id} - {post.title.slice(0, 30)}...
                </p>
                <p className="pl-3">{post.body.slice(0, 40)}...</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
