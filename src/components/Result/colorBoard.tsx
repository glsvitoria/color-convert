import { Color } from "@/types";

interface ColorBoardProps {
  color: Color;
}

export const ColorBoard = ({ color }: ColorBoardProps) => {
  return (
    <div
      className="h-full w-full rounded-lg border border-zinc-400/25"
      style={{
        backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, ${Number(color.alpha) / 100})`,
      }}
    />
  );
};
