import { Outlet, useNavigate } from "react-router-dom";

const Product = () => {
	const navigate = useNavigate();

	return (
		<section className="flex w-full min-h-screen flex-col items-center p-4 ">
			<Outlet />

			<button onClick={() => navigate(-1)} className="btn btn-accent">
				Back
			</button>
		</section>
	);
};

export default Product;
