import { useState, useEffect } from "react";
import ProductService from "../services/product-service";

const useProducts = (id) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState();
	useEffect(() => {
		setLoading(true);
		if (id) {
			const request = ProductService.getSingleProduct(id);
			request
				.then((res) => res.data)
				.then((data) => {
					setProducts(data);
				})
				.catch((error) => {
					setError(error.message);
				})
				.finally(() => {
					setLoading(false);
				});
			return;
		} else {
			const request = ProductService.getAllProducts();
			request
				.then((res) => res.data)
				.then((data) => {
					setProducts(data);
				})
				.catch((error) => {
					setError(error.message);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [id]);
	return { products, isLoading, error };
};
export default useProducts;
