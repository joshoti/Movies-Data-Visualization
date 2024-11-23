import { Paper, Flex, Text, Title } from "@mantine/core";
import { BarChart, getFilteredChartTooltipPayload } from "@mantine/charts";
import {
  marginTop,
  chartHeight,
  toolTipFontWeight,
} from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import { getColorScale } from "../../utils/colorScale";
import { movieByYearData, IMovieByYear } from "../data/MovieByYearData";
import { api } from "../../api/axios-api";
import { TooltipKey, TooltipValue, ChartTooltipPropsT } from "./Tooltip";

function ChartTooltip({ label, payload }: ChartTooltipPropsT) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={toolTipFontWeight} mb={5}>
        {label}
      </Text>
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <>
          <Text key={item.name} fz="sm">
            <TooltipKey value={`${label} Movies Count`} />{" "}
            <TooltipValue value={item.payload.movies} />
          </Text>
          <Text key={item.name} fz="sm">
            <TooltipKey value="Total Gross" />{" "}
            <TooltipValue value={`$${item.payload.total_gross}M`} />
          </Text>
        </>
      ))}
    </Paper>
  );
}

export default function YearByMoviesBarChart() {
  // Default initialization
  let yearData: IMovieByYear = { min_gross: 0, max_gross: 0, data: [] };

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
