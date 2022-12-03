import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Dashboard from "./components/TransactionTable";

render(
	<Router>
		<Routes>
			<Route path="/" element={<App />}>
				{/* Public Routes */}
				<Route path="login" element={<Login />} />
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Route>
		</Routes>
	</Router>,
	document.getElementById("root")
);
