import { HexColorPicker } from "react-colorful";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Select from "./ui/select";
import { Dispatch, SetStateAction } from "react";
import { Indicator } from "./Indicator";
import { Color } from "@/types";
import { convert } from "@/utils/convert";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { regex } from "@/utils/regex";
import { Input } from "./ui/Input";

interface PickerProps {
  color: Color;
  handleChangeColor: (color: Color) => void;
  selectValue: "HEX" | "RGB";
  setSelectValue: Dispatch<SetStateAction<"HEX" | "RGB">>;
}

export const Picker = ({
  color,
  handleChangeColor,
  selectValue,
  setSelectValue,
}: PickerProps) => {
  const schema = z.object({
    color: z.string().refine(
      (value) => {
        if (selectValue === "HEX") {
          return regex.hex.test(value);
        } else {
          return regex.rgb.test(value) || regex.rgba.test(value);
        }
      },
      {
        message:
          selectValue === "HEX"
            ? "Insira uma cor no formato HEX"
            : "Insira uma cor no formato RGB ou RGBA",
      },
    ),
  });

  type IFormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<IFormData>({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      color: "",
    },
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-xl sm:w-picker-sm md:h-picker md:w-picker md:gap-4 lg:gap-6">
      <HexColorPicker
        color={convert.decimalToHexWithColor(color)}
        onChange={(value) => {
          handleChangeColor({
            ...color,
            red: convert.hexToDecimalWithString(value.substring(1, 3)),
            green: convert.hexToDecimalWithString(value.substring(3, 5)),
            blue: convert.hexToDecimalWithString(value.substring(5, 7)),
          });
        }}
      />

      <div className="mr-auto flex flex-row gap-2">
        <Select.Container
          defaultValue={selectValue}
          onValueChange={(value) => {
            resetField("color");
            setSelectValue(value as "HEX" | "RGB");
          }}
        >
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="RGB">RGB</Select.Item>
            <Select.Item value="HEX">Hex</Select.Item>
          </Select.Content>
        </Select.Container>

        <form onSubmit={handleFormSubmit}>
          <Input.Container>
            <Input.Root
              className="max-w-44"
              error={!!errors.color}
              {...register("color", {
                onChange: (event) => {
                  const value = event.target.value;
                  if (selectValue === "HEX" && regex.hex.test(value)) {
                    const valueWithoutHash = value.replace("#", "");
                    if (valueWithoutHash.length === 3) {
                      handleChangeColor({
                        red: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(0, 1).repeat(2),
                        ),
                        green: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(1, 2).repeat(2),
                        ),
                        blue: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(2, 3).repeat(2),
                        ),
                        alpha: convert.hexToDecimalWithString("FF"),
                      });
                    } else if (valueWithoutHash.length === 4) {
                      handleChangeColor({
                        red: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(0, 1).repeat(2),
                        ),
                        green: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(1, 2).repeat(2),
                        ),
                        blue: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(2, 3).repeat(2),
                        ),
                        alpha: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(3, 4).repeat(2),
                        ),
                      });
                    } else if (valueWithoutHash.length === 6) {
                      handleChangeColor({
                        red: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(0, 2),
                        ),
                        green: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(2, 4),
                        ),
                        blue: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(4, 6),
                        ),
                        alpha: convert.hexToDecimalWithString("FF"),
                      });
                    } else if (valueWithoutHash.length === 8) {
                      handleChangeColor({
                        red: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(0, 2),
                        ),
                        green: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(2, 4),
                        ),
                        blue: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(4, 6),
                        ),
                        alpha: convert.hexToDecimalWithString(
                          valueWithoutHash.substring(6, 8),
                        ),
                      });
                    }
                  } else if (
                    (selectValue === "RGB" && regex.rgb.test(value)) ||
                    regex.rgba.test(value)
                  ) {
                    const values = value
                      .replace(/[^\d,]/g, "")
                      .split(",")
                      .map((item: string) => Number(item));

                    handleChangeColor({
                      red: values[0].toString(),
                      green: values[1].toString(),
                      blue: values[2].toString(),
                      alpha: values[3]?.toString() || "255",
                    });
                  }
                },
              })}
            />
            <Input.Error
              error={!!errors.color}
              message={errors.color?.message}
            />
          </Input.Container>
        </form>
      </div>

      <div className="flex w-full flex-col gap-2 md:gap-4 lg:gap-6">
        <Indicator.Color
          type="red"
          value={color.red}
          onChange={(value) => handleChangeColor({ ...color, red: value })}
          selectedValue={selectValue}
        />

        <Indicator.Color
          type="green"
          value={color.green}
          onChange={(value) => handleChangeColor({ ...color, green: value })}
          selectedValue={selectValue}
        />

        <Indicator.Color
          type="blue"
          value={color.blue}
          onChange={(value) => handleChangeColor({ ...color, blue: value })}
          selectedValue={selectValue}
        />

        <Indicator.Color
          type="alpha"
          value={color.alpha}
          onChange={(value) => {
            handleChangeColor({ ...color, alpha: value });
          }}
          selectedValue={selectValue}
        />
      </div>
    </div>
  );
};
