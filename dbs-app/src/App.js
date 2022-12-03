import MainMenu from "./components/MainMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import PrivateRoutes from "./RouteGuard";

function App() {
	return (
		<div className="App">
			<MainMenu />
			{/* <Header />
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path="/" element={<Home />} />
				</Route>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes> */}
		</div>
	);
}
export default App;
