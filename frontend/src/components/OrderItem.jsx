import FormatCurrency from "./FormatCurrency";

// eslint-disable-next-line react/prop-types
const OrderItem = ({price, quantity, name, image}) => {

	return (
		<>
			<div className="flex border shadow-md rounded-lg w-[500px] gap-2 justify-between p-2">
				<div className="flex justify-evenly gap-2">
					<img
						src={image ? image : "https://via.placeholder.com/150"}
						alt="product"
						className="w-24 h-24"
					/>
					<div className="flex flex-col items-start justify-center">
						<h2 className="font-bold text-[18px]">{name}</h2>
						<p className="text-[14px]">
							Price: <FormatCurrency value={price} />
						</p>
						<p className="text-[14px]">Quantity: {quantity}</p>
					</div>
				</div>
				<div className="flex  flex-col items-center justify-evenly gap-2">
					<div className="flex gap-2 justify-center items-center">
						<button className="bg-dimWhite w-[30px] text-black rounded-lg p-1 hover:scale-[102%]">
							-
						</button>
						<span>{quantity}</span>
						<button className="bg-dimWhite w-[30px] text-black rounded-lg p-1 hover:scale-[102%]">
							+
						</button>
					</div>
					<button className="bg-red-100 text-black rounded-lg p-2 hover:scale-[102%] w-full">
						Remove
					</button>
				</div>
			</div>
		</>
	);
};

export default OrderItem;
