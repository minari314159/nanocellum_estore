import api from "../api";
import { useEffect, useState } from "react";

const ProductDetail = () => {
	const [product, setProduct] = useState([]);

	const getProduct = () => {
		api
			.get(`api/products/${id}`)
			.then((res) => res.data)
			.then((data) => {
				setProduct(data);
				console.log(data);
			})
			.catch((err) => alert(err));
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<section className="w-full h-screen flex justify-center py-5  bg-primary">
			ProductDetail: {product.name}
		</section>
	);
};

export default ProductDetail;
