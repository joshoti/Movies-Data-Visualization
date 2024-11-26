import { Flex, Paper, Text } from "@mantine/core";
import { listColors } from "../../utils/colorScale";

type Gradient = {
  minValue: number;
  maxValue: number;
};

export function ChartLegend({ minValue, maxValue }: Gradient) {
  return <GradientBar minValue={minValue} maxValue={maxValue} />;
}

function GradientBar({ minValue, maxValue }: Gradient) {
  return (
    <Flex direction={"column"} w={"35vw"} mt={20} ml={50}>
      <Paper
        bg={`linear-gradient(to right, ${listColors()})`}
        h={20}
        shadow="xs"
        radius="xs"
      ></Paper>
      <Flex justify={"space-between"} style={{ zIndex: -1 }}>
        <GradientMarker value={minValue} align={"flex-start"} />
        <GradientMarker value={(minValue + maxValue) / 2} align={"center"} />
        <GradientMarker value={maxValue} align={"end"} />
      </Flex>
    </Flex>
  );
}

type LegendArgs = {
  value: number;
  align: string;
};

const GradientMarker = ({ value, align }: LegendArgs) => {
  return (
    <Flex direction={"column"} align={align}>
      <Text lh={0.6}>|</Text>
      <Text>{new Intl.NumberFormat("en-US").format(value)}</Text>
    </Flex>
  );
};
