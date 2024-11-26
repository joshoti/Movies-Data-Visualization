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
    <Flex direction={"column"} w={500} mt={20} ml={50}>
      <Paper
        bg={`linear-gradient(to right, ${listColors()})`}
        h={20}
        shadow="xs"
        radius="xs"
      ></Paper>
      <Flex justify={"space-between"} style={{ zIndex: -1 }}>
        <Flex direction={"column"} align={"flex-start"}>
          <GradientMarker value={minValue} />
        </Flex>
        <Flex direction={"column"} align={"center"}>
          <GradientMarker value={(minValue + maxValue) / 2} />
        </Flex>
        <Flex direction={"column"} align={"end"}>
          <GradientMarker value={maxValue} />
        </Flex>
      </Flex>
    </Flex>
  );
}

const GradientMarker = ({ value }: any) => {
  return (
    <>
      <Text lh={0.6}>|</Text>
      <Text>{value}</Text>
    </>
  );
};
