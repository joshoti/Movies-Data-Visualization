import { Text } from "@mantine/core";
import { ColorSwatch } from "@mantine/core";

const fontSize = 14;

type TooltipKeyArgs = {
  value: string;
  markerColor: string;
};

type TooltipArgs = {
  value: string;
};

export type ChartTooltipProps = {
  label: string;
  payload: Record<string, any>[] | undefined;
};

export function TooltipColoredCircle({ value }: TooltipArgs) {
  return <ColorSwatch mr={15} size={10} color={value} />;
}

export function TooltipKey({ value, markerColor }: TooltipKeyArgs) {
  return (
    <>
      <TooltipColoredCircle value={markerColor} />
      <Text fz={fontSize} span>
        {value}
      </Text>
    </>
  );
}

export function TooltipValue({ value }: TooltipArgs) {
  return (
    <Text fz={fontSize} span>
      {value}
    </Text>
  );
}
