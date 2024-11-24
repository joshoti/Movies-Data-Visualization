import { Paper, Flex, Text, Title, Space } from "@mantine/core";
import { BarChart, getFilteredChartTooltipPayload } from "@mantine/charts";
import {
  marginTop,
  chartHeight,
  toolTipFontWeight,
} from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import { getColorScale } from "../../utils/colorScale";
import { movieByYearData, MovieByYearChartData } from "../data/MovieByYearData";
import { api } from "../../api/axios-api";
import {
  TooltipKey,
  TooltipValue,
  ChartTooltipProps,
  TooltipColoredCircle,
} from "./Tooltip";

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="sm">
      <Text fw={toolTipFontWeight} mb={5}>
        {label}
      </Text>
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <>
          <Flex justify={"space-between"}>
            <Flex align={"center"}>
              <TooltipColoredCircle value={item.payload.color} />
              <TooltipKey value={`${label} Movies Count`} />
            </Flex>
            <Space w={15} />
            <TooltipValue
              value={new Intl.NumberFormat("en-US").format(item.payload.movies)}
            />
          </Flex>
          <Flex justify={"space-between"}>
            <Flex align={"center"}>
              <TooltipColoredCircle value={item.payload.color} />
              <TooltipKey value="Total Gross" />
            </Flex>
            <Space w={15} />
            <TooltipValue
              value={`$${new Intl.NumberFormat("en-US").format(
                item.payload.total_gross
              )}M`}
            />
          </Flex>
        </>
      ))}
    </Paper>
  );
}

export default function YearByMoviesBarChart() {
  // Default initialization
  let yearData: MovieByYearChartData = { min_gross: 0, max_gross: 0, data: [] };

  api
    .get("/analysis/sample-3")
    .then(({ data }) => {
      console.log("SAMPLE" + data);
      yearData = data;
    })
    .catch((error) => {});

  if (yearData.data.length === 0) {
    yearData = movieByYearData;
  }

  const formattedData = yearData.data.map((item) => ({
    total_gross: item.total_gross,
    year: item.year,
    movies: item.count,
    color: getColorScale(
      yearData.min_gross,
      yearData.max_gross,
      item.total_gross
    ),
  }));

  return (
    <Flex direction={"column"}>
      <Title
        id="head"
        mt={marginTop / 2}
        mb={marginTop / 2}
        className={classes.tableOfContentTitle}
      >
        Yearly Trend
      </Title>
      <Text mb={10} className={classes.regularText}>
        Use Case: Show the number of movies released over the years.
      </Text>

      <BarChart
        h={chartHeight - 100}
        data={formattedData}
        withBarValueLabel
        dataKey="year"
        valueFormatter={(value) => new Intl.NumberFormat("en-US").format(value)}
        series={[{ name: "movies", color: "#8884d8" }]}
        withTooltip
        tooltipProps={{
          content: ({ label, payload }) => (
            <ChartTooltip label={label} payload={payload} />
          ),
        }}
        withLegend
        xAxisLabel="Year"
        yAxisLabel="Movies Count"
      />
    </Flex>
  );
}
