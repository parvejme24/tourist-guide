import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../../SectionHeading/SectionHeading";
import { useState } from "react";
import { AuthContext } from "./../../../../AuthProvider/AuthProvider";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Swal from "sweetalert2";

const PackageDetails = () => {
  const [date, setDate] = useState(null);
  const packageItem = useLoaderData();
  const {
    tourType,
    tripTitle,
    galleryImages,
    aboutTheTour,
    price,
    tourPlan,
    tourGuides,
  } = packageItem;
  const { user } = useContext(AuthContext);

  const handleBookPackage = (e) => {
    e.preventDefault();
    const form = e.target;
    const touristName = form.touristName.value;
    const touristEmail = form.touristEmail.value;
    const touristImage = form.touristImage.value;
    const price = form.price.value;
    const date = form.date.value;
    const touristGuide = form.touristGuide.value;
    const newBooking = {
      tripTitle,
      touristName,
      touristEmail,
      touristImage,
      price,
      date,
      touristGuide,
    };
    console.log(newBooking);

    fetch("https://tourist-guide-server-nine.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Booking Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };

  return (
    <div>
      <Helmet>
        <title>TravelBDX | Package Details</title>
      </Helmet>
      <SectionHeading title={"Pacage Details"} subTitle={tripTitle} />

      <div className="container mx-auto py-10">
        <div className="mb-4">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {galleryImages.map((item) => (
              <a key={item} href={item}>
                <img className="h-[200px] w-[300px] inline-block" alt="img1" src={item} />
              </a>
            ))}
          </LightGallery>
        </div>

        <h4 className="text-blue-500 font-semibold">{tourType}</h4>
        <p className="text-3xl font-semibold my-4">{aboutTheTour}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-blue-700 bg-blue-100 p-2 mb-2">
              Our Tour Plan
            </h3>
            {tourPlan.map((item) => (
              <div
                key={item.day}
                className="flex gap-4 items-center border rounded-md"
              >
                <h3 className="bg-blue-500 p-2 rounded-md text-white">
                  Day: {item.day}
                </h3>
                <p className="font-semibold text-blue-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-700 bg-blue-100 p-2 mb-2">
              Tour Guides
            </h3>
            <div className="space-y-3">
              {tourGuides.map((tg) => (
                <div key={tg.name} className="border p-2 rounded-md">
                  <h2 className="text-blue-500 font-semibold">
                    Name: {tg.name}
                  </h2>
                  <h3 className="text-gray-700">Experience: {tg.experience}</h3>
                  <p className="text-gray-600">Bio: {tg.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <form
            onSubmit={handleBookPackage}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <input
              className="border p-2 rounded-md"
              placeholder="Tourist Name"
              type="text"
              name="touristName"
              value={user && user.displayName}
              readOnly
              required
            />
            <input
              className="border p-2 rounded-md"
              placeholder="Tourist Email"
              type="email"
              name="touristEmail"
              value={user && user.email}
              readOnly
              required
            />
            <input
              className="border p-2 rounded-md"
              placeholder="Tourist Image"
              type="text"
              name="touristImage"
              value={user && user.photoURL}
              readOnly
              required
            />
            <input
              className="border p-2 rounded-md"
              placeholder="Price"
              type="text"
              name="price"
              value={price}
              required
            />
            <input type="date" name="date" required />
            <select
              className="border rounded-md p-2"
              name="touristGuide"
              id=""
              required
            >
              {tourGuides.map((item) => (
                <option>{item.name}</option>
              ))}
            </select>
            <input
              type="submit"
              value="Book Now"
              className="md:col-span-2 lg:col-span-3 bg-blue-500 hover:bg-blue-600 p-2 w-full text-white rounded-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
