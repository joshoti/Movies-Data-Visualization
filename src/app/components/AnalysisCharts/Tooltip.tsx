import { Text } from "@mantine/core";

type TooltipContentT = {
  value: string;
};
const fontSize = 15;
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

export type ChartTooltipPropsT = {
  label: string;
  payload: Record<string, any>[] | undefined;
};
