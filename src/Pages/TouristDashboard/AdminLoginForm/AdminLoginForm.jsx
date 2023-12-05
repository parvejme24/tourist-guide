import React from "react";

const AdminLoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 space-y-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <input
            type="submit"
            value={"Login"}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 shadow-md"
          />
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
