import React from "react";

const SingleBlog = ({ params }) => {
  console.log(params.segtments);
  const [year, id] = params.segtments || [];
  return (
    <div>
      SingleBlog {year || new Date().getFullYear()} for {id}
    </div>
  );
};

export default SingleBlog;
