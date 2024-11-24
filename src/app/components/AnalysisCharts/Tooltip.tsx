import { Text } from "@mantine/core";
import { ColorSwatch } from "@mantine/core";

const fontSize = 15;

type TooltipContent = {
  value: string;
};

export type ChartTooltipProps = {
  label: string;
  payload: Record<string, any>[] | undefined;
};

export function TooltipColoredCircle({ value }: TooltipContent) {
  return <ColorSwatch mr={15} size={10} color={value} />;
}
export function TooltipKey({ value }: TooltipContent) {
  return (
    <Text fz={fontSize} span>
      {value}:
    </Text>
  );
}

export function TooltipValue({ value }: TooltipContent) {
  return (
    <Text fz={fontSize} span>
      {value}
    </Text>
  );
}
