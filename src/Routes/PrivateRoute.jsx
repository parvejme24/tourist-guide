import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Button,Spinner } from "keep-react";

const PrivetRout = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext)
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        <Button type="outlinePrimary" size="md">
          <span className="pr-2">
            <Spinner color="info" size="md" />
          </span>
          Loading...
        </Button>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivetRout;
