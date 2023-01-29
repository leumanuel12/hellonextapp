import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// (1) First, build the usual getServerSideProps and return the props object with jobs=result.
// (2) Display the jobs object in the jsx as usual.

export async function getServerSideProps(ctx) {

    // (A3) Now incase the user shares the URL with his/her filter, we will need to update the fetch url with the filter query appended.
    const { category } = ctx.query
    //console.log(category)

    // (A4) here we will check if the url has "category" in "context.query", else we return empty, meaning it will display all data instead.
    const filterQuery = ( category ) ? `?category=${category}` : '';

    const response = await axios.get('http://localhost:4000/jobs'+filterQuery) // (A5) Append filterQuery and youre done!
    const result = response.data

  return {
    props: {
        jobs: result,
    },
  };
}


export default function Jobs({ jobs }) {

    // (A1) In order to update the current URL, we will need to use useRouter
    const router = useRouter();

    // (6) define a state that will have an initial state from destructured object jobs
    const [filteredCategory, setFilteredCategory] = useState(jobs);


    // (3) Create an array with the unique categories
    const categories = [...new Set(jobs.map( job => job.category ))]
    categories.sort() //sorting alphabetically for convenience
    //console.log(categories.sort())


    // (5) create the an async function that will be passed in the dropdown onChange property.
    const fetchCategoryHandle = async (e) => {

        const category = e.target.value
        //console.log(category)
    
        const response = await axios.get(`http://localhost:4000/jobs?category=${category}`)
        const result = await response.data
    
        //console.log(result)

        // (7) Now we set the state with the state of the new values we selected from dropdown
        setFilteredCategory(result)

        // (A2) We will use shallow routing in order to update the current URL in the URL tab
        // note that shallow routing will not make a request, only update the url
        router.push(`/jobs?category=${category}`, undefined, { shallow: true })
    }

  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/">
          &#60; Home
        </Link>
      </div>

      <div className="font-bold text-lg">Jobs List</div>


        {/* (4) Display the categories in the dropdown */}
        {/* dropdown for filters (start) */}
        <select
            className="my-3 border border-black rounded-md p-1"
            onChange={fetchCategoryHandle}
            defaultValue="default"
            >
            {categories.map( category => {
                return (
                    <option value={category} key={category}>{category}</option>
                )
            } )}
            <option value="default" disabled>by category</option>
        </select>
        {/* dropdown for filters (end) */}


        <div>
            {/*  (8) from "jobs.map", we now use the new data in state object "filteredCategory" from the selected category in the dropdown */}
            {filteredCategory.map( job => {
                return (
                    <p key={job.id}
                        className="max-w-sm mx-4 p-2 px-3 my-4 hover:bg-red-100 rounded-md">
                        <span className="block">
                            <span className="text-blue-500">Job : </span>
                            <span className="font-medium">{job.title}</span>
                        </span>
                        <span>
                            <span className="text-blue-500">Category : </span>
                            <span>{job.category}</span>
                        </span>
                    </p>
                )
            } )}
        </div>

    </div>
  );
}
