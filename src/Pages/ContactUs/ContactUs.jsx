import React from "react";
import { Helmet } from "react-helmet";
import SectionHeading from "./../../components/SectionHeading/SectionHeading";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>TravelBDX | ContactUs</title>
      </Helmet>
      <SectionHeading title={"Contact Us"} />

      <div className="max-w-md mx-auto my-8 border p-6 rounded-lg shadow-md">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Your Full Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Your Email Address"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
