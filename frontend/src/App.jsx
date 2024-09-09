import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
	Home,
	Login,
	NotFound,
	Register,
	Loader,
	Order,
	Products,
	Product,
	Profile,
	Success,
	Algowatt,
	Fabrication,
} from "./pages/pages";
import {
	CreateProduct,
	EditProduct,
	ProductCard,
} from "./components/components";

import { Footer, NavBar } from "./components/components";
import { useSelector } from "react-redux";

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const user = useSelector((state) => state.user.currentUser);
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
				<main className="bg-base-200 relative w-full">
					<BrowserRouter>
						<NavBar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/order"
								element={user ? <Order /> : <Navigate to="/login" />}
							/>

							<Route path="/products" element={<Products />} />
							<Route
								path="/products/create"
								element={
									user && user.role === "admin" ? (
										<CreateProduct />
									) : (
										<Navigate to="/products" />
									)
								}
							/>
							<Route path="/products/:id" element={<Product />}>
								<Route index element={<ProductCard />} />
								<Route
									path="/products/:id/edit"
									element={
										user && user.role === "admin" ? (
											<EditProduct />
										) : (
											<Navigate to="/products" />
										)
									}
								/>{" "}
							</Route>

							<Route path="/growth" element={<Fabrication />} />
							<Route path="/innovation" element={<Algowatt />} />
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
				</main>
			)}
		</>
	);
};

export default App;
