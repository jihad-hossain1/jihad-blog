// "use client";

import loadLogData from "@/utils/loadLogData";
import loadSingleLogData from "@/utils/loadSingleLogData";

// import { useParams } from "next/navigation";

export const generateMetadata = async ({ params }) => {

  const { title } = await loadSingleLogData(params.id)
  return {
    title: title,
  }
}

export const generateStaticParams = async () => {
  const blogs = await loadLogData()
  // return blogs.map((blog) => ({ id: blog?.id }))
  return blogs.map(({ id }) => ({
    id: id.toString()
  }))
}
const SingleBlog = async ({ params }) => {
  const blog = await loadSingleLogData(params.id)
  return (
    <div

      className="block border border-cyan-500 my-2 p-4 container mx-auto"
    >
      <h2 className="text-2xl">
        {blog?.id}. {blog?.title}
      </h2>
      <p>
        {blog?.body}
      </p>

    </div>
  );
};

export default SingleBlog;
