import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <progress className="progress block mx-auto bg-pink-600 w-56"></progress>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoute;
