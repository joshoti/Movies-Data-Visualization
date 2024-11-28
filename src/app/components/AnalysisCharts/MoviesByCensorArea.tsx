import { useState } from "react";
import { Flex, Title, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import { marginTop, chartHeight, getDataFromApi } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import {
  moviesByCensorData,
  MoviesByCensorChartData,
} from "../data/MoviesByCensorData";

export default function MoviesByCensorRatingAreaChart() {
  let [censorData, setCensorData] = useState<MoviesByCensorChartData>([]);

  getDataFromApi({
    endpoint: "/analysis/sample-5",
    dataState: censorData,
    setDataCallback: setCensorData,
    defaultData: moviesByCensorData,
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
        Movies Released Per Censor Rating Over Time
      </Title>
      <Text mb={10} className={classes.regularText}>
        Use Case: Show the evolution of censorship trends over the years.
      </Text>
      <AreaChart
        h={chartHeight - 100}
        data={censorData}
        curveType="monotone"
        dataKey="year"
        // type="stacked"
        withLegend
        withPointLabels
        xAxisLabel="Year"
        yAxisLabel="Censor Rating"
        series={[
          {
            name: "g_movies",
            label: "G - General audiences",
            color: "violet.6",
          },
          { name: "pg_movies", label: "PG - Parent Guidance", color: "blue.6" },
          { name: "r_movies", label: "R - Restricted", color: "teal.6" },
          { name: "unrated_movies", label: "Unrated", color: "red.6" },
        ]}
      />
    </Flex>
  );
}
