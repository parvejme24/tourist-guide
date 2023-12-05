import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { title, description, image, author, date, categories, tags, content } =
    blog;
  return (
    <div>
      <Helmet>
        <title>TravelBDX | BlogDetails</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SectionHeading title={"Blog Details"} subTitle={title} />
      
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <div className="flex items-centers gap-3">
              <img
                className="border rounded-full p-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/48px-User_icon_2.svg.png"
                alt=""
              />
              <div>
                <h3 className="text-xl font-semibold">{author}</h3>
                <p>{date}</p>
              </div>
            </div>
            <div className="flex gap-5 text-gray-700 font-semibold">
              Categories:
              {categories.map((item) => (
                <p>{item} , </p>
              ))}
            </div>
            <p>{content}</p>
            <div className="flex gap-3 text-gray-500">
              {tags.map((item) => (
                <span>#{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-1"></div>
      </div>
    </div>
  );
};

export default BlogDetails;
