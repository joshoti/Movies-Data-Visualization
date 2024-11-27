import { Flex, Title, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import { marginTop, chartHeight } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";

export default function MoviesByCensorRatingAreaChart() {
  const data = [
    {
      year: 1970,
      g_movies: 30,
      pg_movies: 15,
      r_movies: 10,
      unrated_movies: 4,
    },
    {
      year: 1980,
      g_movies: 20,
      pg_movies: 10,
      r_movies: 8,
      unrated_movies: 2,
    },
    {
      year: 1990,
      g_movies: 25,
      pg_movies: 13,
      r_movies: 15,
      unrated_movies: 0,
    },
    {
      year: 2000,
      g_movies: 30,
      pg_movies: 5,
      r_movies: 6,
      unrated_movies: 2,
    },
    {
      year: 2010,
      g_movies: 23,
      pg_movies: 4,
      r_movies: 4,
      unrated_movies: 0,
    },
    {
      year: 2020,
      g_movies: 15,
      pg_movies: 5,
      r_movies: 10,
      unrated_movies: 2,
    },
  ];

  const formattedData = data.map((item) => ({
    year: item.year,
    g: item.g_movies,
    pg: item.pg_movies,
    r: item.r_movies,
    unrated: item.unrated_movies,
  }));

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
        data={formattedData}
        curveType="monotone"
        dataKey="year"
        // type="stacked"
        withLegend
        withPointLabels
        xAxisLabel="Year"
        yAxisLabel="Censor Rating"
        series={[
          { name: "g", label: "G - General audiences", color: "violet.6" },
          { name: "pg", label: "PG - Parent Guidance", color: "blue.6" },
          { name: "r", label: "R - Restricted", color: "teal.6" },
          { name: "unrated", label: "Unrated", color: "red.6" },
        ]}
      />
    </Flex>
  );
}
