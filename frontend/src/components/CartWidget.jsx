import {cart} from '../assets'

// eslint-disable-next-line react/prop-types
const CartWidget = ({quantity}) => {
  return (
		<button className="relative">
			<div
				className={`${
					quantity === 0
						? "text-primary"
						: "bg-amber-700 shadow-md text-white"
				} absolute rounded-full   w-[20px] h-[20px] text-[11px] opacity-80 flex justify-center items-center -top-1 -right-[8px]`}>
				<span className=" text-[11px] ">{quantity}</span>
			</div>
			<img src={cart} alt="Menu" className="w-[28px] h-[28px] object-contain" />
		</button>
	);
}

export default CartWidget