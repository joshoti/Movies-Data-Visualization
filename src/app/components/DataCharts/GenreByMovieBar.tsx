import { Flex, Text, Title } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { marginTop } from "../Data/Analysis";
import classes from "../Data/Data.module.css";

export default function GenreByMovieBarChart() {
  const data = [
    {
      count: 40,
      main_genre: "Action",
    },
    {
      count: 41,
      main_genre: "Thriller",
    },
    {
      count: 40,
      main_genre: "Drama",
    },
    {
      count: 49,
      main_genre: "Sci-Fi",
    },
    {
      count: 50,
      main_genre: "Horror",
    },
  ];
  const formattedData = data.map((item) => ({
    genre: item.main_genre,
    movies: item.count,
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
        h={400}
        data={formattedData}
        dataKey="genre"
        series={[{ name: "movies", color: "#8884d8" }]}
        withTooltip
        withLegend
        xAxisLabel="Genres"
        yAxisLabel="Movies Count"
      />
    </Flex>
  );
}
