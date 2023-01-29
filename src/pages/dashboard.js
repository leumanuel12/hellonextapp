import axios from "axios";
import Link from "next/link";
import useSWR from "swr";


//for efficiency, we separate the data fetching into a function that will be called in the useSWR hook.
const dataFetch = async () => {
  const response = await axios.get("http://localhost:4000/dashboard");
  const result = response.data;
  return result;
};

export default function Dashboard() {

//data and error are one of the predefined return values for useSWR
  const { data, error } = useSWR("dashboard", dataFetch); //useSWR( key, fetcher, options)

  if (error) return "An error has occured.";
  if (!data) return "Womething went wrong.";

  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          &#60; Home
        </Link>
      </div>

      <div className="font-bold text-lg">Dashboard</div>

      <div>
        <p>post: {data.post}</p>
        <p>likes: {data.likes}</p>
        <p>followers: {data.followers}</p>
        <p>following: {data.following}</p>
      </div>
    </div>
  );
}
