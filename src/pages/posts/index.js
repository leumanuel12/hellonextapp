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
      posts: result,
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

      <div className="mt-4">
        {posts.map((post) => {
          return (
            <div
              className="my-3 max-w-4xl p-2 border border-gray-300 rounded-md hover:bg-blue-100 hover:duration-1000"
              key={post.id}
            >
              <Link href={`/posts/${post.id}`}>
                <span className="font-medium text-blue-500 text-lg border-r-2 border-blue-200 px-3">
                    {post.id} - {post.title.length >= 40 ? post.title.slice(0, 40)+'...' : post.title}
                </span>
                <span className="pl-5">
                    {post.body.length >= 50 ? post.body.slice(0, 50)+'...' : post.body}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
