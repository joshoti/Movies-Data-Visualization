import { Flex, Text, Title } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { marginTop } from "../Data/Analysis";
import classes from "../Data/Data.module.css";

export default function YearByMoviesBarChart() {
  const data = [
    {
      color: "blue",
      count: 40,
      year: 1970,
      total_gross: 1000,
    },
    {
      color: "blue",
      count: 41,
      year: 1980,
      total_gross: 300,
    },
    {
      color: "red",
      count: 40,
      year: 1990,
      total_gross: 200,
    },
    {
      color: "purple",
      count: 49,
      year: 2010,
      total_gross: 320,
    },
    {
      color: "#8884d8",
      count: 50,
      year: 2020,
      total_gross: 980,
    },
  ];
  const formattedData = data.map((item) => ({
    year: item.year,
    movies: item.count,
    color: item.color,
    gross: item.total_gross,
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
        h={400}
        data={formattedData}
        dataKey="year"
        series={[{ name: "movies", color: "#8884d8" }]}
        withTooltip
        withLegend
        xAxisLabel="Year"
        yAxisLabel="Movies Count"
      />
    </Flex>
  );
}
