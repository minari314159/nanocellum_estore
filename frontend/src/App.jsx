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
	Products,
	Profile,
} from "./pages/pages";
import { CartContextProvider } from "./context/CartContext";
import { Footer, NavBar } from "./components/components";

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
				<main className="bg-base-200">
					<CartContextProvider>
						<BrowserRouter>
							<NavBar />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/order" element={<Order />} />
								<Route path="/checkout" element={<Checkout />} />
								<Route path="/products" element={<Products />} />
								<Route path="/profile" element={<Profile />} />

								<Route path="/login" element={<Login />} />
								<Route path="/logout" element={<Logout />} />
								<Route path="/register" element={<RegisterAndLogout />} />
								<Route path="*" element={<NotFound />} />
							</Routes>
							<Footer />
						</BrowserRouter>
					</CartContextProvider>
				</main>
			)}
		</>
	);
};

export default App;
