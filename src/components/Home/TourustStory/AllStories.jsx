import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SectionHeading from "../../SectionHeading/SectionHeading";

const AllStories = () => {
  const [storiesData, setStoriesData] = useState([]);
  useEffect(() => {
    fetch("https://tourist-guide-server-nine.vercel.app/touristStory")
      .then((res) => res.json())
      .then((data) => setStoriesData(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>TravelBDX | All Stories</title>
      </Helmet>
      <SectionHeading title={"All Stories"} />
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {storiesData.map((story) => (
            <div key={story.id} className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600 mb-2">By {story.author}</p>
              <Link
                to={`/stories/${story._id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStories;
