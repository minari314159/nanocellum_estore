import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const CartWidget = () => {
	return (
		<div className="flex justify-evenly">
			<div className="dropdown dropdown-end ">
				<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
					<div className="indicator">
						<FiShoppingCart className="w-6 h-6 " />
						<span className="badge badge-sm bg-accent border-accent indicator-item">
							0
						</span>
					</div>
				</div>
				<div
					tabIndex={0}
					className="mt-3 z-[1] card card-compact  dropdown-content w-52 bg-base-100 shadow ">
					<div className="card-body">
						<span className="font-bold text-lg">0 Items</span>
						<span className="text-info">Subtotal: cart.total</span>
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
