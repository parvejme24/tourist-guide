import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristStory = () => {
  const [storiesData, setStoriesData] = useState([]);
  useEffect(() => {
    fetch("https://tourist-guide-server-nine.vercel.app/touristStory")
      .then((res) => res.json())
      .then((data) => setStoriesData(data));
  }, []);
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">Tourist Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {storiesData.slice(0, 4).map((story) => (
          <div key={story._id} className="border p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
            <p className="text-gray-700">
              {story.content.substring(0, 100)}...
            </p>
            <Link
              to={`/stories/${story._id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/allStories"
          className="text-center py-2 px-3 rounded-md text-white shadow-md mt-8 bg-blue-500 inline-block hover:underline"
        >
          View All Stories
        </Link>
      </div>
    </div>
  );
};

export default TouristStory;
