import PropTypes from "prop-types";
import { navLinks } from "../../index";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SignInButton, SignOutButton } from "./AuthButtons";

const Dropmenu = ({ active, setActive }) => {
	const isSignedIn = false;
	return (
		<div className="flex justify-end z-10">
			<div className="dropdown  dropdown-end">
				<button className="btn btn-circle btn-sm btn-ghost cursor-pointer">
					<BsThreeDotsVertical size={18} />
				</button>
				<div
					tabIndex={0}
					className="menu dropdown-content flex flex-col items-center z-[1]  shadow bg-base-300 rounded-box w-[8rem] mt-3 ">
					<Link
						to="/products"
						onClick={() => {
							setActive(true);
						}}
						className={` text-[14px] font-semibold  btn btn-ghost rounded-xl ${
							active ? "text-base-content" : "text-gray-600"
						}`}>
						Products
					</Link>
					<ul>
						{navLinks.map((nav) => (
							<li
								key={nav.id}
								className={` text-[14px] font-semibold  btn btn-ghost rounded-xl ${
									active === nav.title ? "text-base-content" : "text-gray-600"
								}`}>
								<Link
									to="/"
									onClick={() => {
										setActive(nav.title);
										const element = document.getElementById(nav.id);

										element.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									}}>
									{nav.title}
								</Link>
							</li>
						))}
					</ul>
					{isSignedIn ? <SignOutButton /> : <SignInButton />}
				</div>
			</div>
		</div>
	);
};
Dropmenu.propTypes = {
	active: PropTypes.string.isRequired,
	setActive: PropTypes.func.isRequired,
};

export default Dropmenu;
