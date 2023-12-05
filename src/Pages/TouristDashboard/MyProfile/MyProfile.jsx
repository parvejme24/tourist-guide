import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-4 m-4 bg-blue-100">
      <div className="flex gap-2">
        <img className="w-[100px]" src={user.photoURL} alt="" />
        <div>
          <h2 className="text-2xl font-bold">Name: {user.displayName}</h2>
          <p className="text-xl font-semibold">Email: {user.email}</p>
        </div>
      </div>

      <div className="w-full mt-6">
        <form className="space-y-1">
            <label className="text-xl font-bold">Add New Story</label>
            <textarea className="w-full p-2 rounded-lg" placeholder="Type Your Story..." name="addingStory" id="" cols="" rows="6"></textarea>
            <input type="submit" value={"Add Now"} className="bg-blue-500 hover:bg-blue-600 w-full p-2 rounded-md text-white font-semibold" />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
