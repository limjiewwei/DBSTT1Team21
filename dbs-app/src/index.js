import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Dashboard from "./components/DashboardOverview";
import Profilepage from "./pages/Profilepage";

render(
	<Router>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="login" element={<Login />} />
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="profilepage" element={<Profilepage />} />
			</Route>

			<Route path="/newtransaction" element={<NewTransaction/>}/>
		</Routes>
	</Router>,
	document.getElementById("root")
);
