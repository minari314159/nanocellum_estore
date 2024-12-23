import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Home,
	Login,
	NotFound,
	Register,
	Order,
	Products,
	Product,
	Profile,
	Success,
	Algowatt,
	Fabrication,
} from "./pages/pages";

import { Footer, NavBar } from "./components/components";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import CartProvider from "./context/cart/CartContextProvider";
import UserProvider from "./context/users/UserContextProvider";

const App = () => {
	return (
		<main className="bg-base-200 relative w-full">
			<UserProvider>
				<CartProvider>
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

							<Route path="/products/:id/" element={<Product />} />

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
				</CartProvider>
			</UserProvider>
		</main>
	);
};

export default App;
