import React, { useState } from "react";

const AddPackage = () => {
  const handleAddPackage = (e) => {
    e.preventDefault();
    const form = e.target;
    const coverImage = form.coverImage.value;
    const galleryImages = form.galleryImages.value;
    const tourType = form.tourType.value;
    const tripTitle = form.tripTitle.value;
    const price = form.price.value;
    const aboutTheTour = form.aboutTheTour.value;
    const day = form.day.value;
    const description = form.description.value;
    const name = form.name.value;
    const experience = form.experience.value;
    const bio = form.bio.value;
    const tourPlan = [{ day, description }];
    const tourGuides = [{ name, experience, bio }];
    const newPackage = [
      coverImage,
      galleryImages,
      tourType,
      tripTitle,
      price,
      aboutTheTour,
      tourGuides,
      tourPlan,
    ];
    console.log(newPackage);

    fetch("https://tourist-guide-server-nine.vercel.app/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Packaged Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="m-4 p-4 bg-blue-100">
      <h2 className="text-3xl font-bold mb-4">Add Package</h2>
      <form
        onSubmit={handleAddPackage}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block mb-1 font-semibold">Cover Image</label>
          <input
            type="text"
            name="coverImage"
            required
            placeholder="Cover Image"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Gallery Images</label>
          <input
            type="text"
            name="galleryImages"
            required
            placeholder="Gallery Images"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Tour Type</label>
          <input
            type="text"
            name="tourType"
            required
            placeholder="Tour Type"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Trip Title</label>
          <input
            type="text"
            name="tripTitle"
            required
            placeholder="Trip Title"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            type="text"
            name="price"
            required
            placeholder="Price"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">About The Tour</label>
          <input
            type="text"
            name="aboutTheTour"
            required
            placeholder="About The Tour"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Tour Guide Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Tour Guide Name"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            Tour Guide Experience
          </label>
          <input
            type="text"
            name="experience"
            required
            placeholder="Tour Guide Experience"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Tour Guide Bio</label>
          <input
            type="text"
            name="bio"
            required
            placeholder="Tour Guide Bio"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Tour Plan Day</label>
          <input
            type="number"
            name="day"
            required
            placeholder="Tour Plan Day"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            Tour Plan Description
          </label>
          <input
            type="text"
            name="description"
            required
            placeholder="Tour Plan Description"
            className="p-2 border rounded-md w-full border-blue-500"
          />
        </div>
        <input
          type="submit"
          value="Add Package"
          className="bg-blue-500 rounded-md text-white p-2 shadow-md"
        />
      </form>
    </div>
  );
};

export default AddPackage;
