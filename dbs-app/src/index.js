import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import PrivateRoutes from './RouteGuard'
import Login from "./pages/Login";
import Dashboard from "./components/DashboardOverview";
import NewTransactions from "./pages/NewTransactions";
import Profilepage from "./pages/Profilepage";

render(
	<Router>
		<Routes>
			<Route path="/" element={<App />}>
				
				
				<Route path="login" element={<Login />} />
				<Route element={<PrivateRoutes/>}>
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="profilepage" element={<Profilepage />} />
				<Route path="newtransaction" element={<NewTransactions />} />
				</Route>
			</Route>
		</Routes>
	</Router>,
	document.getElementById("root")
);
