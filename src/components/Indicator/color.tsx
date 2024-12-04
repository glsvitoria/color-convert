import { useCallback, useEffect, useState } from "react";
import { convert } from "@/utils/convert";
import { Input } from "../ui/Input";
import { Slider } from "../ui/Slider";

interface ColorProps {
  selectedValue: "HEX" | "RGB";
  type: "red" | "green" | "blue" | "alpha";
  value: string;
  onChange: (value: string) => void;
}

export const Color = ({ value, onChange, type, selectedValue }: ColorProps) => {
  const completeBackgroundColor = useCallback(() => {
    switch (type) {
      case "red":
        return `rgb(${value}, 0, 0)`;
      case "green":
        return `rgb(0, ${value}, 0)`;
      case "blue":
        return `rgb(0, 0, ${value})`;
      case "alpha":
        return `rgba(0, 0, 0, ${value})`;
    }
  }, [type, value]);

  const [backgroundColorCompleted, setBackgroundColorCompleted] = useState(() =>
    completeBackgroundColor(),
  );

  useEffect(() => {
    setBackgroundColorCompleted(() => completeBackgroundColor());
  }, [value, type, completeBackgroundColor]);

  return (
    <div className="flex w-full flex-row gap-6">
      <Input.Root
        className="w-16"
        value={
          selectedValue === "RGB"
            ? value
            : convert.decimalToHexWithString(value)
        }
        onChange={(e) => {
          if (Number(e.target.value) < 0) {
            onChange("0");
            return;
          }

          if (selectedValue === "RGB") {
            if (parseInt(e.target.value) > 255) {
              onChange("255");
              return;
            }
          } else {
            if (Number(convert.decimalToHexWithString(e.target.value)) > 255) {
              onChange("255");
              return;
            }
          }

          onChange(e.target.value);
        }}
        type={selectedValue === "RGB" ? "number" : "text"}
        maxLength={3}
      />
      <Slider.Container
        max={255}
        step={1}
        value={[parseInt(value)]}
        onValueChange={(value) => onChange(value.toString())}
      >
        <Slider.Color backgroundColor={backgroundColorCompleted} />
      </Slider.Container>
    </div>
  );
};
