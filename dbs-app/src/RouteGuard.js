import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
	function hasJWT() {
		let flag = true;

		//check user has JWT token
		// localStorage.getItem("token") ? (flag = ) : (flag = false);

		return flag;
	}
	if (hasJWT()) {
		return <Outlet />;
	} else {
		return <Navigate to="/login" />;
	}
	/*
return (
    hasJWT ? <Outlet/> : <Navigate to='/login'/>
  )*/
};
export default PrivateRoutes;
