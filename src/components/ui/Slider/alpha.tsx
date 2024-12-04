import * as SliderPrimitive from '@radix-ui/react-slider'

interface AlphaProps {
	backgroundColor: string
}

export const Alpha = ({ backgroundColor }: AlphaProps) => {
	return (
		<SliderPrimitive.Track
			className="relative h-4 w-full grow overflow-hidden rounded-full"
			style={{
				backgroundImage: `linear-gradient(to right, rgba(${backgroundColor}, 0) 0%, rgba(${backgroundColor}, 1) 100%)`,
			}}
		>
			<SliderPrimitive.Range className="absolute h-full" />
		</SliderPrimitive.Track>
	)
}
