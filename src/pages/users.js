import axios from "axios";
import Link from "next/link";
import User from "./components/user";

export async function getStaticProps() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const result = await response.data;

  console.log(result);

  return {
    props: {
      users: result,
    },
  };
}

export default function Users({ users }) {
  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          &#60; Home
        </Link>
      </div>
      <div className="font-bold text-lg">Users Page</div>

      <div className="mt-4 max-w-md">
        {users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
}
