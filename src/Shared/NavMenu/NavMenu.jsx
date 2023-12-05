import React, { useContext } from "react";
import { Button, Dropdown, Navbar } from "keep-react";
import { Heart } from "phosphor-react";
import logo from "../../assets/logo-l.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

const NavMenu = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const photo = (
    <>
      <img className="w-10 h-10 rounded-full" src={user && user.photoURL} />
    </>
  );
  const handleLogOut = () => {
    logOut();
  };
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive ? "text-blue-500 underline" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>

      {user && isAdmin && (
        <li>
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}

      {user && !isAdmin && (
        <li>
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="shadow-md py-2">
      <Navbar className="container mx-auto" fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            {navItems}
          </Navbar.Container>
          <Navbar.Brand>
            <Link to="/">
              <img className="w-14" src={logo} alt="" />
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              {navItems}
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center">
            <Navbar.Container
              tag="ul"
              className="flex items-center justify-between"
            >
              {user && (
                <NavLink to="dashboard/myWishlist">
                  <Navbar.Link
                    icon={<Heart size={20} color="#444" />}
                    iconAnimation={false}
                  />
                </NavLink>
              )}
              {user && (
                <>
                  <Dropdown
                    label={photo}
                    size="sm"
                    type=""
                    dismissOnClick={true}
                    arrowIcon=""
                  >
                    <Dropdown.Item className="flex justify-center font-bold">
                      {user.displayName}
                    </Dropdown.Item>
                    <Dropdown.Item className="-mt-4 flex justify-center font-semibold">
                      {user.email}
                    </Dropdown.Item>
                    <Dropdown.Item className="font-semibold">
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Button
                        className="w-full"
                        onClick={handleLogOut}
                        size="xs"
                        type="outlinePrimary"
                      >
                        LogOut{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                      </Button>
                    </Dropdown.Item>
                  </Dropdown>
                </>
              )}
            </Navbar.Container>

            <div>
              {user ? (
                <></>
              ) : (
                <>
                  <Link to="/login">
                    <Button className="mx-2" size="xs" type="primary">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>

            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
