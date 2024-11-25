import { Flex, Paper, Space, Text } from "@mantine/core";
import { ColorSwatch } from "@mantine/core";
import { toolTipFontWeight, toolTipSpacing } from "../Analysis/Analysis";
import { getFilteredChartTooltipPayload } from "@mantine/charts";

const fontSize = 14;

type TooltipArgs = {
  value: string;
};

export function TooltipValue({ value }: TooltipArgs) {
  return (
    <Text fz={fontSize} span>
      {value}
    </Text>
  );
}

type TooltipKeyArgs = {
  value: string;
  markerColor: string;
};

export function TooltipColoredCircle({ value }: TooltipArgs) {
  return <ColorSwatch mr={15} size={10} color={value} />;
}

export function TooltipKey({ value, markerColor }: TooltipKeyArgs) {
  return (
    <Flex align="center">
      <TooltipColoredCircle value={markerColor} />
      <Text fz={fontSize} span>
        {value}
      </Text>
    </Flex>
  );
}

export type TooltipRecord = {
  attributeName: string;
  attributePropertyName: string;
  formatNumber: boolean;
};

export type ChartTooltipProps = {
  label: string;
  payload: Record<string, any>[] | undefined;
  tooltipLegendData: Array<TooltipRecord>;
};

export function TooltipRow({
  dataItem,
  attributeName,
  attributePropertyName,
  formatNumber,
}: any) {
  const attributeValue = dataItem.payload[attributePropertyName];
  return (
    <Flex justify={"space-between"}>
      <TooltipKey value={attributeName} markerColor={dataItem.payload.color} />
      <Space w={toolTipSpacing} />
      <TooltipValue
        value={
          formatNumber
            ? new Intl.NumberFormat("en-US").format(attributeValue)
            : attributeValue
        }
      />
    </Flex>
  );
}
/**
 * Custom tooltop component. Label and payload are passed from a Chart's parameters.
 * "tooltipLegendData" is an object summarizing the data to provide a legend for and
 * where to get the relevant values from the payload.
 *
 * Each object in the tooltpLegendData array corresponds to a line in the tooltip.
 * @param label
 * @param payload
 * @param tooltipLegendData
 * @returns ChartTooltip component
 */
export function ChartTooltip({
  label,
  payload,
  tooltipLegendData,
}: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="sm">
      <Text fw={toolTipFontWeight} mb={5}>
        {label}
      </Text>
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <>
          {tooltipLegendData.map((tooltip: TooltipRecord) => (
            <TooltipRow
              dataItem={item}
              attributeName={tooltip.attributeName}
              attributePropertyName={tooltip.attributePropertyName}
              formatNumber={tooltip.formatNumber}
            />
          ))}
        </>
      ))}
    </Paper>
  );
}
