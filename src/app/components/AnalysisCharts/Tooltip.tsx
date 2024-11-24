import { Text } from "@mantine/core";
import { ColorSwatch } from "@mantine/core";

const fontSize = 15;

type TooltipContentT = {
  value: string;
};

export type ChartTooltipPropsT = {
  label: string;
  payload: Record<string, any>[] | undefined;
};


export function TooltipColoredCircle({ value }: TooltipContentT) {
  return <ColorSwatch mr={15} size={10} color={value} />
}
export function TooltipKey({ value }: TooltipContentT) {
  return (
    <Text fz={fontSize} span>
      {value}:
    </Text>
  );
}

export function TooltipValue({ value }: TooltipContentT) {
  return (
    <Text fz={fontSize} span>
      {value}
    </Text>
  );
}

