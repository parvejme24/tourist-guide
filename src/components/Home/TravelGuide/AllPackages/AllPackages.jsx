import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SectionHeading from "./../../../SectionHeading/SectionHeading";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

const AllPackages = () => {
  const auth = useAuth();
  const allpackage = useLoaderData();

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
    <div>
      <Helmet>
        <title>TravelBDX | Packages</title>
      </Helmet>
      <SectionHeading title={"Our Pacages"} />

      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg">
          {allpackage.map((item) => (
            <>
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
