import * as SliderPrimitive from "@radix-ui/react-slider";

interface ColorProps {
  backgroundColor: string;
}

export const Color = ({ backgroundColor }: ColorProps) => {
  return (
    <SliderPrimitive.Track
      className="relative h-4 w-full grow overflow-hidden rounded-full"
      style={{
        backgroundColor,
      }}
    >
      <SliderPrimitive.Range
        className="absolute h-full"
        style={{
          backgroundColor,
        }}
      />
    </SliderPrimitive.Track>
  );
};
