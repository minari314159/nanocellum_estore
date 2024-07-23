import { nullprofile } from "../../assets";
import { NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
const Avatar = () => {
	const { user } = useAuthContext();
	return (
		<NavLink to="/profile">
			<div className="flex justify-center items-center m-1   btn-md btn-circle btn-ghost">
				<img
					src={user ? user.imageURL : nullprofile}
					alt="default picture"
					width="28"
					height="28"
					className="rounded-full  aspect-square w-[90%] h-[90%] content-center object-cover border-black border shadow-lg"
				/>
			</div>
		</NavLink>
	);
};

export default Avatar;
