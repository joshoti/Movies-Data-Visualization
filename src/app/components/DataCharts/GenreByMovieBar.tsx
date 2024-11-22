import { Flex, Text, Title } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { marginTop, chartHeight } from "../Data/Analysis";
import classes from "../Data/Data.module.css";

export default function GenreByMovieBarChart() {
  const data = [
    {
      color: "red",
      count: 40,
      rating: 7,
      main_genre: "Action",
    },
    {
      color: "blue",
      count: 41,
      rating: 8,
      main_genre: "Thriller",
    },
    {
      color: "blue",
      count: 40,
      rating: 8.5,
      main_genre: "Drama",
    },
    {
      color: "purple",
      count: 49,
      rating: 8,
      main_genre: "Sci-Fi",
    },
    {
      color: "#8884d8",
      count: 50,
      rating: 5,
      main_genre: "Horror",
    },
  ];
  const formattedData = data.map((item) => ({
    genre: item.main_genre,
    movies: item.count,
    rating: item.rating,
    color: item.color, // use rating to generate color
  }));

  return (
    <Flex direction={"column"}>
      <Title
        id="head"
        mt={marginTop / 2}
        mb={marginTop / 2}
        className={classes.tableOfContentTitle}
      >
        Overview of Genres
      </Title>
      <Text mb={10} className={classes.regularText}>
        Use Case: Analyze the distribution of movies by genre
      </Text>

      <BarChart
        h={chartHeight - 100}
        data={formattedData}
        dataKey="genre"
        withBarValueLabel
        series={[{ name: "movies", color: "#8884d8" }]}
        withTooltip
        withLegend
        xAxisLabel="Genres"
        yAxisLabel="Movies Count"
      />
    </Flex>
  );
}
