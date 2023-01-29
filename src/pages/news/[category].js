import axios from "axios";
import Link from "next/link";

export async function getServerSideProps(ctx) {

    //console.log(ctx)
    //console.log(ctx.params)
    const { category } = ctx.params;

  const response = await axios.get(`http://localhost:4000/news?category=${category}`);
  const result = response.data;
  

  return {
    props: {
        articles: result,
        category,
    },
  };
}

export default function NewsArticlesByCategory({articles, category}) {

  return (
    <div className="m-3 max-w-7xl mx-auto">
      <div className="p-3 mb-3">
        <Link className="p-2" href="/news">
          &#60; News
        </Link>
      </div>

      <div className="font-bold text-lg">Category: {category.charAt(0).toUpperCase()+category.slice(1)}</div>

      <div className="m-3 p-3 max-w-2xl border border-blue-300">

        {articles.map( article => { return (
            <div
              className="grid grid-cols-4 mb-2 p-3 max-md:block hover:bg-red-50"
              key={article.id}
            >
              <div className="col-span-1 flex justify-end max-md:justify-start pr-10">
                <p className="text-gray-400 text-sm font-medium pr-2 pt-1">
                  {article.category.toUpperCase()}
                </p>
              </div>
              <div className="col-span-3 pb-2 border-b border-gray-300">
                <p className="font-medium text-lg text-blue-500">
                  {article.title}
                </p>
                <p className="pt-1">{article.details}</p>
              </div>
            </div>
        ) } )}



      </div>


    </div>
  );
}
