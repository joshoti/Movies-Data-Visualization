import { useState } from "react";
import { Flex, Title, Text } from "@mantine/core";
import { CompositeChart } from "@mantine/charts";
import { marginTop, chartHeight, getDataFromApi } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import {
  genreCompositeData,
  GenreCompositeChartData,
} from "../data/GenreCompositeData";

export default function GenreCompositeChart() {
  const [genreData, setGenreData] = useState<GenreCompositeChartData>([]);

  getDataFromApi({
    endpoint: "/analysis/sample-4",
    dataState: genreData,
    setDataCallback: setGenreData,
    defaultData: genreCompositeData,
    baseCaseProperty: "length",
    baseCaseValue: 0,
  });

  return (
    <Flex direction={"column"}>
      <Title
        id="head"
        mt={marginTop / 2}
        mb={marginTop / 2}
        className={classes.chartTitle}
      >
        Gross By Runtime vs Genre
      </Title>
      <Text mb={10} className={classes.regularText}>
        Use Case: Examine the relationship between Total Gross and Runtime,
        grouped by Genre.
      </Text>
      <CompositeChart
        h={chartHeight - 100}
        pl={10}
        data={genreData}
        dataKey={"main_genre"}
        xAxisLabel="Genres"
        valueFormatter={(value) => new Intl.NumberFormat("en-US").format(value)}
        withLegend
        withBarValueLabel
        withPointLabels
        series={[
          {
            name: "runtime",
            label: "Runtime (Mins)",
            color: "rgba(18, 120, 255, 0.2)",
            type: "bar",
          },
          {
            name: "total_gross",
            label: "Total Gross (Million $)",
            color: "red.8",
            type: "line",
          },
          // { name: "Rating", color: "yellow.8", type: "area" },
        ]}
        curveType="natural"
      />
    </Flex>
  );
}
