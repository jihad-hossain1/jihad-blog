// "use client";
import loadLogData from "@/utils/loadLogData";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
export const metadata = {
  title: "Blogs | Jihad Blog",
  description: "Learn Effective Programming",
};


const BlogPage = async () => {
  //   const router = useRouter();
  const blogs = await loadLogData()
  console.log(blogs)
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, body, title }) => (
        <div
          key={id}
          className="block border border-cyan-500 my-2 p-4"
        >
          <h2 className="text-2xl">
            {id}. {title}
          </h2>
          <p>
            {body}
          </p>
          <Link
            href={{
              pathname: `/blogs/${id}`,

            }}
            className="inline-block mt-2 border border-sky-200 hover:border-0 shadow-sm hover:shadow px-1 py-0 rounded bg-sky-100 hover:bg-sky-200 hover:text-cyan-700"
          >
            Details
          </Link>
        </div>

      ))}
    </div>
  );
};

export default BlogPage;
