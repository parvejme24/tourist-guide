import { Button, TextInput } from "keep-react";
import { Envelope, UserCircle, LinkSimple, Lock } from "phosphor-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/(?=.*[!#$%&? "])/.test(password)) {
      return setError("Don't have a special character");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Don't have a capital letter");
    } else if (password.length < 6) {
      return setError("Password cannot be less than 6 characters");
    }

    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);

        updateUserProfile(name, photo)
          .then(() => {
            const userInfo = {
              name: name,
              email: email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database");
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Register Successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error.message);
          });

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "This email Already Exist",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate(location?.state ? location.state : "/");
      });
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <img
          className="w-full h-screen hidden md:flex"
          src="https://images.pexels.com/photos/14108869/pexels-photo-14108869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-center text-3xl font-bold text-blue-500">
          Register
        </h2>
        <form
          onSubmit={handleRegister}
          className="p-10 md:w-3/3 lg:w-1/2 mx-auto space-y-3"
        >
          <TextInput
            placeholder="Your Name"
            color="gray"
            sizing="md"
            name="name"
            type="text"
            required
            addon={<UserCircle size={20} color="#5E718D" />}
            addonPosition="left"
          />
          <TextInput
            placeholder="Photo URL"
            color="gray"
            sizing="md"
            name="photoURL"
            type="text"
            required
            addon={<LinkSimple size={20} color="#5E718D" />}
            addonPosition="left"
          />
          <TextInput
            placeholder="example@gmail.com"
            color="gray"
            sizing="md"
            name="email"
            type="email"
            required
            addon={<Envelope size={20} color="#5E718D" />}
            addonPosition="left"
          />
          <div className="relative">
            <TextInput
              id="#id-10"
              placeholder="Password"
              name="password"
              color="gray"
              sizing="md"
              required
              type={show ? "password" : "text"}
              addon={<Lock size={20} color="#5E718D" />}
              addonPosition="left"
              iconPosition="right"
            />
            <p
              className="absolute right-4 top-2"
              onClick={() => setShow(!show)}
            >
              <small>{show ? "Show" : "Hide"}</small>
            </p>
            <p className="text-red-500">
              <small>{error}</small>
            </p>
          </div>
          <input
            type="submit"
            value="Register"
            className="bg-blue-500 hover:bg-blue-600 w-full mx-auto flex justify-center rounded-md text-white p-2 cursor-pointer"
          />
          <p className="text-center">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </small>
          </p>
        </form>
        <div className="flex justify-center">
          <Button
            onClick={handleGoogleLogin}
            className=""
            type="outlinePrimary"
          >
            Google Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
