import { publicRequest } from "./requestMethods";

class ProductService {
	async getAllProducts() {
		const request = publicRequest.get("api/products/");
		return request;
	}
	async getSingleProduct(id) {
		const request = publicRequest.get(`api/products/${id}/`);
		return request;
	}
}

export default new ProductService();
