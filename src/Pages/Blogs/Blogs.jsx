import axios from "axios";
import React, { useState } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  axios.get("https://tourist-guide-server-nine.vercel.app/blogs").then((data) => setBlogs(data.data));

  return (
    <div>
      <Helmet>
        <title>TravelBDX | Blogs</title>
      </Helmet>
      <SectionHeading
        title={"Blogs"}
        subTitle={"Our Latest Blogs"}
      ></SectionHeading>
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                {post.content.substring(0, 100)}...
              </p>
              <Link
                to={`/blogDetails/${post._id}`}
                className="text-blue-500 hover:underline mt-2 block"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
