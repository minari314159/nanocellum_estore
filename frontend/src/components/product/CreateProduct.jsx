import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "../components";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { createProduct } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const CreateProduct = () => {
	const [inputs, setInputs] = useState({});
	const [img, setImg] = useState();
	const { isFetching, error } = useSelector((state) => state.product.products);
	const dispatch = useDispatch();
	const redirect = useNavigate();
	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		//upload image & inputs
		const fileName = new Date().getTime() + img.name;
		const storage = getStorage(app);
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, img);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
					case "paused":
						console.log("Upload is paused");
						break;
					case "running":
						console.log("Upload is running");
						break;
					default:
				}
			},
			(error) => {
				throw new Error(error.message)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					const product = { ...inputs, image: downloadURL };
					createProduct(product, dispatch);
				});
			}
		);
		if (!isFetching && !error) {
			redirect("/products");
		}
	};
	return (
		<section className="flex w-full min-h-screen flex-col items-center justify-center gap-2 p-4 ">
			<h1 className="font-bold text-[2rem]">Create a Product</h1>
			<Card style="w-[60%] max-w-[400px]">
				<form className="w-[90%] flex flex-col justify-center items-between gap-5 p-3 mx-5">
					<div className="flex flex-col justify-center items-between gap-3">
						<label
							className={`input input-bordered input-md flex items-center gap-2 `}>
							<input
								className="grow "
								type="text"
								name="title"
								onChange={handleChange}
								placeholder="Product Title"
							/>
						</label>
						<label
							className={`input input-bordered input-md flex items-center gap-2 px-0 `}>
							<input
								className="grow text-neutral-400 focus:outline-none block w-full text-sm file:btn h-[2.8rem] file:text-neutral-500 file:border-none file:rounded-r-none "
								type="file"
								name="image"
								onChange={(e) => setImg(e.target.files[0])}
								placeholder="Product Image"
							/>
						</label>
						<label
							className={`input input-bordered input-md flex items-center gap-2`}>
							<input
								className="grow "
								type="text"
								name="designer"
								onChange={handleChange}
								placeholder="Designer"
							/>
						</label>

						<label
							className={`input input-bordered input-md flex items-center gap-2`}>
							<input
								className="grow "
								type="number"
								name="price"
								onChange={handleChange}
								placeholder="Product Price"
							/>
						</label>

						<textarea
							className={`w-full my-2  grow input-bordered bg-base-100 input-xl rounded-lg p-1 `}
							type="text"
							name="description"
							onChange={handleChange}
							required
							cols={15}
							rows={10}
						/>
						<button
							disabled={isFetching}
							className="btn btn-base-300 rounded-lg shadow-[1px_1px_5px_2px_#f9fafb1A] "
							onClick={handleSubmit}>
							Create
						</button>
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
