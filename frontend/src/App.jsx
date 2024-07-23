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
	Profile,
	Success
} from "./pages/pages";
import {
	CreateProduct,
	EditProduct,
	ProductCard,
} from "./components/components";
import { CartContextProvider } from "./context/CartContext";
import { Footer, NavBar } from "./components/components";
import useAuthContext from "./hooks/useAuthContext";

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
				<main className="bg-base-200 w-full relative">
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
								<Route
									path="/products/create"
									element={
										user ? <CreateProduct /> : <Navigate to="/products" />
									}
								/>
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
								<Route path="/register" element={<Register />} />
								<Route path="/login" element={<Login />} />
								<Route path="/success" element={<Success />} />

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
