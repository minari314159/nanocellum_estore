import { Card } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import {  useState } from "react";
import { userRequest} from "../../requestMethods";
import { useSelector } from "react-redux";
const EditProduct = () => {
	const { id } = useParams();
	const product = useSelector((state) =>
		state.product.products.find((product) => product._id === id)
	);

	const [title, setTitle] = useState();
	const [price, setPrice] = useState();
	const [designer, setDesigner] = useState();
	const [description, setDescription] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);
	const redirect = useNavigate();



	const handleSubmit = async (e) => {
		//prevents page from refreshing
		e.preventDefault();

		setLoading(true);
		const product = { title, price, designer, description };
		const response = await userRequest.put(`products/${id}`, {
			...product,
		});
		const data = await response.data;
		if (!response.ok) {
			setError(data.error);
			setEmptyFields(data.emptyFields);
		}
		if (response.ok) {
			setProduct(data);
			setError(null);
			setEmptyFields([]);
		}
		setLoading(false);
		redirect(-1);
	};
	return (
		<>
			<div className="p-4 px-6 bg-accent rounded-e-full flex flex-col items-center justify-center shadow-lg">
				<h1 className="text-2xl lg:text-4xl font-bold">
					Edit: {product.title}
				</h1>
			</div>{" "}
			<Card style="min-w-[300px] max-w-[600px] my-5">
				<div className="w-full flex gap-2">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col justify-start items-center text-xs sm:text-sm md:text-md lg:text-lg text-left p-2">
						<label className="w-full flex justify-between items-center">
							<b>Title:</b>
							<input
								className={`my-2 ml-2 grow bg-transparent border border-base-300 rounded-md p-1 ${
									emptyFields.includes("title") && "border-error"
								}`}
								type="text"
								required
								onChange={(e) => setTitle(e.target.value)}
								defaultValue={product.title}
							/>
						</label>
						<label className="w-full flex justify-between items-center">
							<b>Price:</b>
							<input
								className={`my-2  grow ml-2  bg-transparent border border-base-300 rounded-md p-1 ${
									emptyFields.includes("price") && "border-error"
								}`}
								type="number"
								required
								onChange={(e) => setPrice(e.target.value)}
								defaultValue={product.price}
							/>
						</label>
						<label className="w-full flex justify-between items-center">
							<b>Designer:</b>{" "}
							<input
								type="text"
								required
								onChange={(e) => setDesigner(e.target.value)}
								defaultValue={product.designer}
								className={`my-2  ml-1  grow bg-transparent border border-base-300 rounded-md p-1 ${
									emptyFields.includes("designer") && "border-error"
								}`}
							/>
						</label>
						<hr className="w-full my-2 text-base-300" />
						<textarea
							className={`w-full my-2  grow bg-transparent border border-base-300 rounded-lg p-1 ${
								emptyFields.includes("description") && "border-error"
							}`}
							type="text"
							required
							onChange={(e) => setDescription(e.target.value)}
							defaultValue={product.description}
							cols={15}
							rows={10}
						/>
						<button
							type="submit"
							disabled={loading}
							className="btn  btn-base-200 ">
							{loading ? "Submitting Changes" : "Submit Changes"}
						</button>
						{error && <p className="text-error">{error}</p>}
					</form>
					<img
						src={product.image}
						alt={product.name}
						height={300}
						width={300}
						className="rounded-full w-md h-md aspect-square shadow-lg m-1 content-center object-cover"
					/>
				</div>
			</Card>
		</>
	);
};

export default EditProduct;
