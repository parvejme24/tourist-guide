import { TextInput } from "keep-react";
import { Envelope, Lock } from "phosphor-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(true);
  const { signInUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Invalid Email or Password",
          showConfirmButton: false,
          timer: 1500,
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
        <h2 className="text-center text-3xl font-bold text-blue-500">Login</h2>
        <form
          onSubmit={handleLogin}
          className="p-10 md:w-3/3 lg:w-1/2 mx-auto space-y-3"
        >
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
              type={show ? "password" : "text"}
              required
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
          </div>
          <input
            type="submit"
            value="Login"
            className="bg-blue-500 hover:bg-blue-600 w-full mx-auto flex justify-center rounded-md text-white p-2 cursor-pointer"
          />
          <p className="text-center">
            <small>
              New to this website?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
