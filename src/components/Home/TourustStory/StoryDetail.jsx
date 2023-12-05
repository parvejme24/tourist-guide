import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { FacebookShareButton } from "react-share";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { FaFacebookSquare } from "react-icons/fa";

const StoryDetail = () => {
  const story = useLoaderData();

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div>
      <Helmet>
        <title>TravelBDX | Story Details</title>
      </Helmet>
      <SectionHeading title={"Story Details"} subTitle={story.title} />
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">{story.title}</h2>
        <p className="text-gray-600 text-xl mb-4">By {story.author}</p>
        <p className="text-gray-700">{story.content}</p>
        <div className="mt-4 bg-blue-500 inline-block py-2 px-3 text-white rounded-md shadow-md">
          <FacebookShareButton className="flex items-center gap-2"
            url={`https://tourist-guide-server-nine.vercel.app/touristStory/${story._id}`}
          >
            <FaFacebookSquare /> Share on Facebook
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
