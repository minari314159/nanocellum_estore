import { Card } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateProduct } from "../../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";
const EditProduct = () => {
	const { id } = useParams();
	const product = useSelector((state) =>
		state.product.products.find((product) => product._id === id)
	);
	const [inputs, setInputs] = useState({});
	const dispatch = useDispatch();
	const redirect = useNavigate();

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
		console.log(inputs)
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			updateProduct(id, inputs , dispatch);
			redirect(-1);
		} catch (err) {
			console.log(err);
		}
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
					<form className="flex flex-col justify-start items-center text-xs sm:text-sm md:text-md lg:text-lg text-left p-2">
						<label className="w-full flex justify-between items-center">
							<b>Title:</b>
							<input
								className={`my-2 ml-2 grow bg-transparent border border-base-300 rounded-md p-1 `}
								type="text"
								name="title"
								required
								onChange={handleChange}
								defaultValue={product.title}
							/>
						</label>
						<label className="w-full flex justify-between items-center">
							<b>Price:</b>
							<input
								className={`my-2  grow ml-2  bg-transparent border border-base-300 rounded-md p-1 `}
								type="number"
								name="price"
								required
								onChange={handleChange}
								defaultValue={product.price}
							/>
						</label>
						<label className="w-full flex justify-between items-center">
							<b>Designer:</b>{" "}
							<input
								type="text"
								name="designer"
								required
								onChange={handleChange}
								defaultValue={product.designer}
								className={`my-2  ml-1  grow bg-transparent border border-base-300 rounded-md p-1 `}
							/>
						</label>
						<hr className="w-full my-2 text-base-300" />
						<textarea
							className={`w-full my-2  grow bg-transparent border border-base-300 rounded-lg p-1 `}
							type="text"
							name="description"
							required
							onChange={handleChange}
							defaultValue={product.description}
							cols={15}
							rows={10}
						/>
						<button onClick={handleSubmit} className="btn  btn-base-200 ">
							Submit Changes
						</button>
						{/* {error && <p className="text-error">{error}</p>} */}
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
