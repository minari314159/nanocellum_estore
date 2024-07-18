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
	Product,
	ProductCard,
	EditProduct,
	CreateProduct,
	Profile,
} from "./pages/pages";
import { CartContextProvider } from "./context/CartContext";
import { Footer, NavBar } from "./components/components";
import useAuthContext from "./hooks/useAuthContext";

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
	const { user } = useAuthContext();
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
				<main className="bg-base-200 w-full">
					<CartContextProvider>
						<BrowserRouter>
							<NavBar />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route
									path="/order"
									element={user ? <Order /> : <Navigate to="/login" />}
								/>
								<Route
									path="/checkout"
									element={user ? <Checkout /> : <Navigate to="/login" />}
								/>
								<Route path="/products" element={<Products />} />
								<Route path="/products/create" element={user ? <CreateProduct /> : <Navigate to="/products"/>} />
								<Route path="/products/:id" element={<Product />}>
									<Route index element={<ProductCard />} />
									<Route
										path="/products/:id/edit"
										element={user ? <EditProduct /> : <Navigate to="/login" />}
									/>{" "}
								</Route>

								<Route
									path="/profile"
									element={user ? <Profile /> : <Navigate to="/login" />}
								/>
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
