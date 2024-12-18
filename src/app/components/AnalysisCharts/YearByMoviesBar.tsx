import { useState } from "react";
import { Flex, Text, Title } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { marginTop, chartHeight, getDataFromApi } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import { getColorScale } from "../../utils/colorScale";
import { movieByYearData, MovieByYearChartData } from "../data/MovieByYearData";
import { TooltipRecord, ChartTooltip } from "./Tooltip";
import { ChartLegend } from "./Legend";

export default function YearByMoviesBarChart() {
  const [yearData, setYearData] = useState<MovieByYearChartData>({
    min_gross: 0,
    max_gross: 0,
    data: [],
  });

  getDataFromApi({
    endpoint: "/analysis/sample-3",
    dataState: yearData,
    setDataCallback: setYearData,
    defaultData: movieByYearData,
    baseCaseProperty: "max_gross",
    baseCaseValue: 0,
  });

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

  const tooltipLegendData: Array<TooltipRecord> = [
    {
      attributeName: "Movies Count",
      attributePropertyName: "movies",
      formatNumber: true,
    },
    {
      attributeName: "Total Gross (Million $)",
      attributePropertyName: "total_gross",
      formatNumber: true,
    },
  ];

  return (
    <Flex direction={"column"}>
      <Title
        id="head"
        mt={marginTop / 2}
        mb={marginTop / 2}
        className={classes.chartTitle}
      >
        Yearly Trend
      </Title>
      <Text mb={10} className={classes.regularText}>
        Use Case: Show the number of movies released over the years.
        Additionally, a heatmap visualizes the total gross for each year.
      </Text>

      <BarChart
        mt={20}
        h={chartHeight - 100}
        data={formattedData}
        withBarValueLabel
        dataKey="year"
        valueFormatter={(value) => new Intl.NumberFormat("en-US").format(value)}
        series={[{ name: "movies", color: "#8884d8" }]}
        withTooltip
        tooltipProps={{
          content: ({ label, payload }) => (
            <ChartTooltip
              label={label}
              payload={payload}
              tooltipLegendData={tooltipLegendData}
            />
          ),
        }}
        legendProps={{
          content: () => (
            <ChartLegend
              minValue={yearData.min_gross}
              maxValue={yearData.max_gross}
            />
          ),
          verticalAlign: "bottom",
        }}
        withLegend
        xAxisLabel="Year"
        yAxisLabel="Movies Count"
      />
    </Flex>
  );
}
