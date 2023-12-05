import React from "react";
import { Helmet } from "react-helmet";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const Community = () => {
  return (
    <div>
      <Helmet>
        <title>TravelBDX | Community</title>
      </Helmet>
      <SectionHeading title={"Join Our Community"} />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-700 leading-loose">
            Welcome to the <span className="font-bold">travelBDX</span>{" "}
            community! Connect with fellow travelers, share your experiences,
            and discover hidden gems together. Join the conversation and be a
            part of our vibrant community.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Featured Discussions
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Discussion Cards */}
              <li className="bg-white p-6 rounded-md shadow-md">
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Exploring Hill Stations
                </h4>
                <p className="text-gray-700">
                  Share your favorite hill station experiences and
                  recommendations. Let's discover the breathtaking beauty of
                  elevated landscapes together!
                </p>
              </li>
              <li className="bg-white p-6 rounded-md shadow-md">
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Culinary Adventures
                </h4>
                <p className="text-gray-700">
                  Discuss local cuisines, hidden food spots, and must-try
                  dishes. Connect with foodies from around the world!
                </p>
              </li>
              <li className="bg-white p-6 rounded-md shadow-md">
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Solo Travel Stories
                </h4>
                <p className="text-gray-700">
                  Share your solo travel adventures and tips. Inspire and be
                  inspired by the incredible journeys of independent travelers.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Join the Conversation
            </h3>
            <p className="text-lg text-gray-700 leading-loose">
              Whether you're a seasoned traveler or planning your first trip,
              our community is here to support and inspire you. Join
              discussions, ask questions, and share your expertise. Together, we
              make every journey unforgettable.
            </p>
            <p className="text-lg text-gray-700 leading-loose mt-4">
              Ready to become a part of the{" "}
              <span className="font-bold">travelBDX</span> community? Sign up
              today and start connecting with fellow adventurers!
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-teal-500 text-white px-8 py-3 rounded-md hover:bg-teal-600 transition duration-300"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
