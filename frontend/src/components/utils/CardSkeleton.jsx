import Card from "./Card";
const CardSkeleton = () => {
	return (
		<Card style="w-[11rem] sm:w-[14rem] md:w-[15rem] lg:w-[20rem]">
			<div className="flex w-52 flex-col gap-4">
				<div className="skeleton h-32 w-full"></div>
				<div className="skeleton h-4 w-28"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
			</div>
		</Card>
	);
};
export default CardSkeleton;
