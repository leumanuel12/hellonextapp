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
    <div className="m-4">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          Go back
        </Link>
      </div>
      <div className="mb-5 font-medium text-lg">Users Page</div>

      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
}
