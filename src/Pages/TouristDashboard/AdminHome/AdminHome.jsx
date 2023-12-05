import React from "react";
import useAuth from "./../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="m-4 p-4 bg-blue-100">
      <h2 className="text-3xl font-bold">
        <span className="font-semibold">Hi, Welcome </span>
        {user?.displayName ? user.displayName : " Back"}
      </h2>

      <div>
        <span>Users: </span>
        <h3>{stats.users}</h3>
      </div>
    </div>
  );
};

export default AdminHome;
