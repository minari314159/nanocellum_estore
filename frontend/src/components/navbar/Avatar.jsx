import { nullprofile } from "../../assets";
import { NavLink } from "react-router-dom";


const Avatar = () => {
	

	return (
		<NavLink to="/profile">
			<div className="flex justify-center items-center m-1   btn-md btn-circle btn-ghost">
				<img
					src={ nullprofile}
					alt="default picture"
					width="28"
					height="28"
					className={`rounded-full  aspect-square w-[90%] h-[90%] content-center object-cover border-black border  `}
				/>
			</div>
		</NavLink>
	);
};

export default Avatar;
