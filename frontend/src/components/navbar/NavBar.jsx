import { useState } from "react";
import { logo } from "../../assets";
import Avatar from "./Avatar";
import { NavLink, useLocation } from "react-router-dom";
import CartWidget from "./CartWidget";
import Dropmenu from "./DropMenu";

const NavBar = () => {
	const [active, setActive] = useState(false);
	const location = useLocation();

	return (
		<nav
			className={` ${
				location.pathname === "/" ? "sticky" : "fixed"
			} navbar navbar-center z-10  max-w-7xl  top-0  bg-base-200 backdrop-blur-sm  bg-opacity-20 shadow-lg`}>
			<NavLink
				to="/"
				onClick={() => {
					window.scroll({
						top: 0,
						behavior: "smooth",
					});
					setActive(true);
				}}
				className="flex-1">
				<img
					src={logo}
					alt="nanocellum logo"
					className="bg-transparent w-auto h-[40px]  cursor-pointer "
				/>
			</NavLink>

			<div className=" flex  justify-end items-center gap-2">
				<CartWidget />

				<Avatar />

				<Dropmenu active={active} setActive={setActive} />
			</div>
		</nav>
	);
};

export default NavBar;
