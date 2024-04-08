import { blogsData } from "../../utils/dataBlogs";
import BlogCard from "../cards/BlogCard";

const BlogsList = () => {
  return (
    <div className="flex gap-5 flex-col 2xl:grid grid-cols-2">
      {blogsData.map((blog) => {
        return (
          <div key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogsList;
