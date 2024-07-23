import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const CartWidget = () => {
	const cart = useSelector((state) => state.cart);

	console.log(cart);
	return (
		<div className="flex justify-evenly">
			<div className="dropdown dropdown-end ">
				<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
					<div className="indicator">
						<FiShoppingCart className="w-6 h-6 " />
						<span className="badge badge-sm bg-accent border-accent indicator-item">
							{cart.quantity}
						</span>
					</div>
				</div>
				<div
					tabIndex={0}
					className="mt-3 z-[1] card card-compact  dropdown-content w-52 bg-base-100 shadow ">
					<div className="card-body">
						<span className="font-bold text-lg">{cart.quantity} Items</span>
						<span className="text-info">Subtotal: {cart.total}</span>
						<div className="card-actions">
							<Link to="/order" className="btn btn-accent btn-block">
								View cart
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartWidget;
