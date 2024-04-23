import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, NotFound, Register, Loader } from "./pages/pages";

import ProductDetail from "./components/ProductDetail";

const Logout = () => {
	localStorage.clear();
	return <Navigate to="/" />;
};
//clears local storage to remove any old access token
const RegisterAndLogout = () => {
	localStorage.clear();
	return <Register />;
};
const App = () => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000); //2 sec
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />}>
							<Route path="/product/:id" element={<ProductDetail />} />
						</Route>
						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/register" element={<RegisterAndLogout />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
};

export default App;
