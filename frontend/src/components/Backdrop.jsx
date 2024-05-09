import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center"
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			{children}
		</motion.div>
	);
};

export default Backdrop;
