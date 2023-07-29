"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
export const metadata = {
  title: "Blogs | Jihad Blog",
  description: "Learn Effective Programming",
};

const blogs = [
  {
    id: 1,
    year: 2016,
    title: "title 1",
  },
  {
    id: 2,
    year: 2016,
    title: "title 2",
  },
  {
    id: 3,
    year: 2016,
    title: "title 3",
  },
  {
    id: 4,
    year: 2016,
    title: "title 4",
  },
  {
    id: 5,
    year: 2016,
    title: "title 5",
  },
];
const BlogPage = () => {
  //   const router = useRouter();
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <Link
          key={id}
          href={{
            pathname: `/blogs/${year}/${id}`,
            query: {
              title: title,
            },
          }}
          className="block border border-cyan-500 my-2"
        >
          {title}
        </Link>
        // <button
        //   key={id}
        //   onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
        //   //   href={{
        //   //     pathname: `/blogs/${year}/${id}`,
        //   //     query: {
        //   //       title: title,
        //   //     },
        //   //   }}
        //   className="block border border-cyan-500 my-2"
        // >
        //   {title}
        // </button>
      ))}
    </div>
  );
};

export default BlogPage;
