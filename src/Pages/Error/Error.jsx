import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center text-center items-center h-screen">
      <div className="space-y-2">
        <h2 className="text-8xl font-semibold">404</h2>
        <h3 className="text-2xl font-bold">Page Not Found</h3>
        <Link className="inline-block bg-blue-500 hover:bg-blue-600 py-2 px-4 text-xl text-white rounded-md">Go Home</Link>
      </div>
    </div>
  );
};

export default Error;
