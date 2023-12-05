import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";

const TravelGuide = () => {
  const auth = useAuth();
  const [overviewData, setOverview] = useState([]);
  const [packageData, setPackage] = useState([]);
  const [tourGuide, setTourGuide] = useState([]);

  useEffect(() => {
    axios
      .get("https://tourist-guide-server-nine.vercel.app/overview")
      .then((data) => setOverview(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://tourist-guide-server-nine.vercel.app/packages")
      .then((data) => setPackage(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://tourist-guide-server-nine.vercel.app/tourGuides")
      .then((data) => setTourGuide(data.data));
  }, []);

  const handleWishNow = (wishItem) => {
    const touristEmail = auth.user.email;
    const { coverImage, tourType, tripTitle, price, tourGuides, _id } =
      wishItem;
    const newWish = {
      coverImage,
      tourGuides,
      tourType,
      tripTitle,
      price,
      touristEmail,
      tourId: _id,
    };
    fetch("https://tourist-guide-server-nine.vercel.app/wish", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newWish),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Wish Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="container mx-auto py-10">
      <Tabs>
        <TabList
          className="text-center p
        b-5"
        >
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        {/* overview  */}
        <TabPanel className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewData.map((data) => (
              <div key={data._id} className="border p-4 rounded-md">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full rounded-md"
                    title={`Tourism Overview Video ${data.id}`}
                    src={data.videoUrl}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="text-3xl font-bold my-4">{data.title}</h2>
                <p className="text-gray-700">{data.description}</p>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* our packages  */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg">
            {packageData.slice(0, 3).map((item) => (
              <div key={item._id}>
                <div className="space-y-2 p-4 border rounded-lg shadow-sm">
                  <div>
                    <img
                      className="w-full rounded-md"
                      src={item.coverImage}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-600">
                      {item.tourType}
                    </h3>
                    <p>{item.price}</p>
                    <button onClick={() => handleWishNow(item)}>
                      <FaHeart className="text-2xl text-red-500" />
                    </button>
                  </div>
                  <h2 className="text-2xl font-bold">{item.tripTitle}</h2>
                  <Link
                    to={`/packageDetails/${item._id}`}
                    className="bg-blue-500 hover:bg-blue-600 p-2 w-full block rounded-md text-center font-semibold text-white"
                  >
                    View Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link
              to="/packages"
              className="bg-blue-800 p-2 px-4 rounded-md text-white shadow-md"
            >
              All Packages
            </Link>
          </div>
        </TabPanel>

        {/* for meet our tour guide  */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
            {tourGuide.map((item) => (
              <div
                key={item._id}
                className="border p-4 rounded-md shadow-sm text-center"
              >
                <img
                  className="w-24 h-24 mx-auto rounded-full"
                  src={item.profileImage}
                  alt=""
                />
                <h2 className="text-blue-500 font-semibold">{item.name}</h2>
                <p className="mb-3">{item.contactDetails.email}</p>
                <Link
                  to={`tourGuideDetails/${item._id}`}
                  className="bg-blue-500 p-2 text-white rounded-md"
                >
                  Details
                </Link>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TravelGuide;
