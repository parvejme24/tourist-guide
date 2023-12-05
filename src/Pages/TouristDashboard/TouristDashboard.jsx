import React, { useContext } from "react";
import { Sidebar } from "keep-react";
import { BookBookmark, SquaresFour, Users, House, Heart } from "phosphor-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

const TouristDashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  // console.log(isAdmin)
  return (
    <div className="container mx-auto flex">
      <dir className="w-[30%] bg-blue-100 p-4">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.ItemGroup>
            <Sidebar.Item
              className="bg-blue-300"
              icon={<SquaresFour size={24} />}
            >
              Dashboard
            </Sidebar.Item>

            <hr />

            {isAdmin ? (
              <>
                <Sidebar.Item icon={<Users size={24} />}>
                  <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={<Users size={24} />}>
                  <NavLink to="/dashboard/myProfile">My Profile</NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={<Heart size={24} />}>
                  <NavLink to="/dashboard/addPackage">Add Package</NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={<BookBookmark size={24} />}>
                  <NavLink to="/dashboard/users">Manage User</NavLink>
                </Sidebar.Item>
              </>
            ) : (
              <>
                <Sidebar.Item icon={<Users size={24} />}>
                  <NavLink to="/dashboard/userHome">User Home</NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={<Users size={24} />}>
                  <NavLink to="/dashboard/myProfile">My Profile</NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={<Heart size={24} />}>
                  <NavLink to="/dashboard/myWishlist">My Wishlist</NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={<BookBookmark size={24} />}>
                  <NavLink to="/dashboard/myBooking">My Booking</NavLink>
                </Sidebar.Item>
              </>
            )}

            <hr />

            <Sidebar.Item icon={<House size={24} />}>
              <NavLink to="/">Home</NavLink>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar>
      </dir>

      <div className="w-[70%]">
        <Outlet />
      </div>
    </div>
  );
};

export default TouristDashboard;
