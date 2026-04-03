import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ allowedRoles }) => {
  const { user, token } = useSelector((state) => state.authReducer);

  console.log("user", user, " token", token);

  // not logged in
  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  // role not allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
