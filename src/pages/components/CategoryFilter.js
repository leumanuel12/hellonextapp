import Link from "next/link";

export default function CategoryFilter({ news }) {

    if(!news) return;

   //console.log(news)

  //set will return unique values and by enclosing it with square brakets turns it an array
  const filteredCategories = [...new Set(news.map((article) => article.category.toLowerCase()))];

  //console.log(filteredCategories)

  return (
    <div className="my-2 mt-5">
      Filter By :
      {filteredCategories.map((category) => {
        return (
          <span className="px-1" key={category}>
            <Link
              className="px-2 py-1 border border-blue-500 rounded-md hover:text-white hover:bg-blue-500"
              href={`/news/${category}`}
            >
              {category}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
