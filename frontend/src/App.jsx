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
import ProtectedRoute from "./components/utils/ProtectedRoute";

function Logout() {
	localStorage.clear();
	return <Navigate to="/login" />;
}

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
				<main className="bg-base-200 relative w-full">
					<BrowserRouter>
						<NavBar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/order"
								element={
									<ProtectedRoute>
										<Order />
									</ProtectedRoute>
								}
							/>

							<Route path="/products" element={<Products />} />

							<Route
								path="/products/create"
								element={
									<ProtectedRoute>
										<CreateProduct />
									</ProtectedRoute>
								}
							/>
							<Route path="/products/:id" element={<Product />}>
								<Route index element={<ProductCard />} />
								<Route
									path="/products/:id/edit"
									element={
										<ProtectedRoute>
											<EditProduct />
										</ProtectedRoute>
									}
								/>{" "}
							</Route>

							<Route path="/growth" element={<Fabrication />} />
							<Route path="/innovation" element={<Algowatt />} />
							<Route
								path="/profile"
								element={
									<ProtectedRoute>
										<Profile />
									</ProtectedRoute>
								}
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
