import { convert } from "@/utils/convert";
import { Input } from "../ui/Input";
import { Slider } from "../ui/Slider";

interface TransparencyProps {
  color: string;
  value: string;
  selectedValue: "HEX" | "RGB";
  onChange: (value: string) => void;
}

export const Transparency = ({
  color,
  value,
  selectedValue,
  onChange,
}: TransparencyProps) => {
  return (
    <div className="flex w-full flex-row gap-6">
      <Input.Root
        className="w-16"
        value={
          selectedValue === "RGB"
            ? value
            : convert.alphaDecimalToHexString(value)
        }
        onChange={(e) => {
          if (selectedValue === "HEX") {
            const decimalValue = convert.hexToDecimalWithString(e.target.value);
            const alpha = Math.floor(Number(decimalValue) / 2.55);
            onChange(alpha.toString());
            return;
          }

          onChange(e.target.value);
        }}
        type={selectedValue === "RGB" ? "number" : "text"}
        maxLength={3}
      />
      <Slider.Container
        max={selectedValue === "HEX" ? 255 : 100}
        step={1}
        value={
          selectedValue === "HEX" ? [Number(value) * 2.55] : [Number(value)]
        }
        onValueChange={(value) => {
          if (selectedValue === "HEX") {
            const alphaBetween0And1 = (value[0] / 255).toFixed(2);
            const alphaBetween0And100 = Math.floor(
              Number(alphaBetween0And1) * 100,
            );
            onChange(alphaBetween0And100.toString());
            return;
          }

          onChange(value[0].toString());
        }}
      >
        <Slider.Alpha backgroundColor={color} />
      </Slider.Container>
    </div>
  );
};
