import api from "../api";
import { useEffect, useState } from "react";

const ProductDetail = () => {
	const [product, setProduct] = useState([]);

	const fetchProduct = async () => {
		const response = await api.get("products/pk");
		setProduct(response.data);
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<section className="w-[85%] h-screen flex flex-wrap justify-center rounded-xl outline mx-5">
			ProductDetail: {product.name}
		</section>
	);
};

export default ProductDetail;
