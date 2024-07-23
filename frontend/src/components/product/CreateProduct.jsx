import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "../components";
const CreateProduct = () => {
	const [title, setTitle] = useState("");
	const [designer, setDesigner] = useState("");
	const [price, setPrice] = useState();

	const [description, setDescription] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);
	const redirect = useNavigate();

	const handleSubmit = async (e) => {
		//prevents page from refreshing
		//prevents page from refreshing
		e.preventDefault();

		setLoading(true);
		const product = { title, price, designer, description };
		const response = await fetch(`http://localhost:3000/api/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			//converts object to JSON string
			body: JSON.stringify(product),
		});
		const data = await response.json();
		if (!response.ok) {
			setError(data.error);
			setEmptyFields(data.emptyFields);
		}
		if (response.ok) {
			setTitle("");
			setDesigner("");
			setPrice("");

			setDescription("");
			setError(null);
			setEmptyFields([]);
			setError(null);
			setEmptyFields([]);
		}

		setLoading(false);
		redirect("/products");
	};
	return (
		<section className="flex w-full min-h-screen flex-col items-center gap-2 p-4 ">
			<h1 className="font-bold text-[2rem]">Create a Product</h1>
			<Card style="w-[60%] max-w-[400px]">
				<form
					onSubmit={handleSubmit}
					className="w-[90%] flex flex-col justify-center items-between gap-5 p-3 mx-5">
					<div className="flex flex-col justify-center items-between gap-3">
						<label
							className={`input input-bordered input-md flex items-center gap-2 ${
								emptyFields.includes("description") && "border-error"
							} `}>
							<input
								className="grow "
								type="text"
								name="title"
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Product Title"
							/>
						</label>
						<label
							className={`input input-bordered input-md flex items-center gap-2${
								emptyFields.includes("description") && "border-error"
							}`}>
							<input
								className="grow "
								type="text"
								name="designer"
								onChange={(e) => setDesigner(e.target.value)}
								placeholder="Designer"
							/>
						</label>

						<label
							className={`input input-bordered input-md flex items-center gap-2${
								emptyFields.includes("description") && "border-error"
							}`}>
							<input
								className="grow "
								type="number"
								name="price"
								onChange={(e) => setPrice(e.target.value)}
								placeholder="Product Price"
							/>
						</label>

						<textarea
							className={`w-full my-2  grow input-bordered bg-base-100 input-xl rounded-lg p-1 ${
								emptyFields.includes("description") && "border-error"
							}`}
							type="text"
							onChange={(e) => setDescription(e.target.value)}
							required
							cols={15}
							rows={10}
						/>
						<button
							disabled={loading}
							className="btn btn-base-300 rounded-lg shadow-[1px_1px_5px_2px_#f9fafb1A] "
							type="submit">
							{loading ? "Creating Product" : "Create"}
						</button>
						{error && <p className="text-error">{error}</p>}
					</div>
				</form>
			</Card>
			<Link to="/products" className="btn  btn-ghost ">
				{" "}
				&larr; Back
			</Link>
		</section>
	);
};

export default CreateProduct;
