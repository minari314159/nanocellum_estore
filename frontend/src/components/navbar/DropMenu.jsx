import { navLinks } from "../../index";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SignInButton, SignOutButton } from "./AuthButtons";
import useAuthContext from "../../hooks/useAuthContext";
// eslint-disable-next-line react/prop-types
const Dropmenu = ({ active, setActive }) => {
	const { user } = useAuthContext();

	return (
		<div className="flex justify-end z-10">
			<div className="dropdown  dropdown-end">
				<button className="btn btn-circle btn-md btn-ghost cursor-pointer">
					<BsThreeDotsVertical size={18} />
				</button>
				<div
					tabIndex={0}
					className="menu dropdown-content flex flex-col items-center z-[1]  shadow-xl bg-base-200 rounded-box w-[8rem] mt-3 ">
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
					{user && user.role === "admin" && (
						<Link
							to="/products/create"
							onClick={() => {
								setActive(true);
							}}
							className={` text-[14px] font-semibold  btn btn-ghost rounded-xl ${
								active ? "text-base-content" : "text-gray-600"
							}`}>
							Create
						</Link>
					)}

					{navLinks.map((nav) => (
						<Link
							to="/"
							onClick={() => {
								setActive(nav.title);
								const element = document.getElementById(nav.id);

								element.scrollIntoView({
									behavior: "smooth",
									block: "start",
								});
							}}
							key={nav.id}
							className={` text-[14px] font-semibold  btn btn-ghost rounded-xl ${
								active === nav.title ? "text-base-content" : "text-gray-600"
							}`}>
							{nav.title}
						</Link>
					))}

					{user ? <SignOutButton /> : <SignInButton />}
				</div>
			</div>
		</div>
	);
};

export default Dropmenu;
