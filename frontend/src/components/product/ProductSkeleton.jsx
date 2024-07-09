
import Card from '../Card';

export default function ProductSkeleton() {
	return (
		<Card style="overflow-hidden flex flex-col animate-pulse">
			<div className="w-full aspect-video bg-gray-300" />
			<div>
				<div>
					<div className="w-3/4 h-6 rounded-full bg-gray-300" />
				</div>
				<div>
					<div className="w-1/2 h-4 rounded-full bg-gray-300" />
				</div>
			</div>
			<div className="space-y-2">
				<div className="w-full h-4 rounded-full bg-gray-300" />
				<div className="w-full h-4 rounded-full bg-gray-300" />
				<div className="w-3/4 h-4 rounded-full bg-gray-300" />
			</div>
			<div>
				<button className="w-full" disabled></button>
			</div>
		</Card>
	);
}
