import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../../SectionHeading/SectionHeading";

const TourGuideDetails = () => {
  const tourGuide = useLoaderData();
  const {
    name,
    profileImage,
    contactDetails,
    education,
    skills,
    workExperience,
  } = tourGuide;
  return (
    <div>
      <Helmet>
        <title>TravelBDX | Tour Guide Details</title>
      </Helmet>
      <SectionHeading title={"Tour Guide Details"} />
      <div className="container mx-auto py-10">
        <div className="p-5 rounded-lg border shadow-md">
          <div className="text-center mb-8">
            <img
              className="rounded-full mx-auto mb-3"
              src={profileImage}
              alt=""
            />
            <h2 className="text-2xl font-semibold text-blue-500">{name}</h2>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-3 rounded-md w-full">
                <h3 className="text-xl font-semibold mb-1">Contact Details</h3>
                <p>{contactDetails.email}</p>
                <p>{contactDetails.phone}</p>
                <p>{contactDetails.address}</p>
              </div>

              <div className="border p-3 rounded-md w-full">
                <h3 className="text-xl font-semibold mb-1">Education:</h3>
                <p>
                  <span className="font-semibold">Degree:</span>{" "}
                  {education.degree}
                </p>
                <p>
                  <span className="font-semibold">School:</span>{" "}
                  {education.school}
                </p>
                <p>
                  <span className="font-semibold">Graduation Year:</span>{" "}
                  {education.graduationYear}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border p-3 rounded-md w-full">
                <h3 className="text-xl font-semibold mb-1">Skills:</h3>
                {skills.map((item) => (
                  <li>{item}</li>
                ))}
              </div>

              <div className="border p-3 rounded-md w-full">
                <h3 className="text-xl font-semibold mb-1">
                  Working Experience:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workExperience.map((item) => (
                    <div>
                      <h4>
                        <span className="font-semibold">Position:</span>{" "}
                        {item.position}
                      </h4>
                      <p>
                        <span className="font-semibold">Company:</span>{" "}
                        {item.company}
                      </p>
                      <p>
                        <span className="font-semibold">Location:</span>{" "}
                        {item.location}
                      </p>
                      <p>
                        <span className="font-semibold">Start Date:</span>{" "}
                        {item.startDate}
                      </p>
                      <p>
                        <span className="font-semibold">End Date:</span>{" "}
                        {item.endDate}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideDetails;
