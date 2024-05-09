import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
	Home,
	Login,
	NotFound,
	Register,
	Loader,
	Order,
	Checkout,
} from "./pages/pages";
import { CartContextProvider } from "./context/CartContext";

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
				<CartContextProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/order" element={<Order />} />
							<Route path="/checkout" element={<Checkout />} />

							<Route path="/login" element={<Login />} />
							<Route path="/logout" element={<Logout />} />
							<Route path="/register" element={<RegisterAndLogout />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			)}
		</>
	);
};

export default App;
