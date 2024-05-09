import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
	hidden: { y: "-100vh", opacity: 0 },
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: { y: "100vh", opacity: 0 },
};
// eslint-disable-next-line react/prop-types
const Modal = ({ handleClose, text }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				className="bg-white p-2 w-[500px] h-[300px] flex flex-col items-center rounded-lg shadow-lg"
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit">
				<h1 className="text-2xl font-bold">{text}</h1>
				<button
					onClick={handleClose}
					className="bg-primary text-white px-3 py-1 rounded-lg mt-5">
					Close
				</button>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
