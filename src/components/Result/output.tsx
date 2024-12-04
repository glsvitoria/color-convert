import { Copy } from "lucide-react";
import * as Tooltip from "../ui/tooltip";
import { Color } from "@/types";
import { useState } from "react";
import { convert } from "@/utils/convert";

interface OutputProps {
  type: "HEX" | "RGB";
  color: Color;
}

export const Output = ({ type, color }: OutputProps) => {
  const [copyWithSuccess, setCopyWithSuccess] = useState(false);

  const handleCopy = () => {
    const value =
      type === "RGB"
        ? `rgb(${color.red}, ${color.green}, ${color.blue})`
        : `#${convert.decimalToHexWithColor(color)}`;

    navigator.clipboard.writeText(value);

    setCopyWithSuccess(true);
  };

  return (
    <div className="flex w-full flex-row justify-between rounded-sm border border-[#E5E7EB] px-1.5 py-1">
      <p className="text-inherit">
        {type === "HEX"
          ? color.alpha === "255"
            ? `#${convert.decimalToHexWithColor(color)}`
            : `#${convert.decimalToHexWithColor(color)}`
          : color.alpha === "255"
            ? `rgb(${color.red}, ${color.green}, ${color.blue})`
            : `rgba(${color.red}, ${color.green}, ${color.blue}, ${Number(color.alpha) / 100})`}
      </p>
      <Tooltip.Provider>
        <Tooltip.Container
          delayDuration={0}
          onOpenChange={(open) => {
            if (open) {
              setCopyWithSuccess(false);
            }
          }}
        >
          <Tooltip.Trigger
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <Copy
              className="h-5 w-5 text-inherit hover:cursor-pointer"
              onClick={handleCopy}
            />
          </Tooltip.Trigger>
          <Tooltip.Content
            onPointerDownOutside={(event) => {
              event.preventDefault();
            }}
          >
            {copyWithSuccess
              ? "Copiada para área de transferência"
              : "Copie o código da cor"}
          </Tooltip.Content>
        </Tooltip.Container>
      </Tooltip.Provider>
    </div>
  );
};
