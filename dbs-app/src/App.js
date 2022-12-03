import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMenu from "./components/MainMenu";
import { Navigate, useLocation } from "react-router-dom";

const App = () => {
	const location = useLocation();
	return (
		<>
			{location.pathname !== "/login" && <MainMenu />}
			<Outlet />
		</>
	);
};

export default App;