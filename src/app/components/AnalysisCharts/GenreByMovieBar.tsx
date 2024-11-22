import { Flex, Text, Title } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { marginTop, chartHeight } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import { getColorScale } from "../../utils/colorScale";
import { api } from "../../api/axios-api";
import { genreByMovieData, IGenreByMovie } from "../data/GenreByMovieData";

export default function GenreByMovieBarChart() {
  // Default initialization
  let genreData: IGenreByMovie = { min_rating: 0, max_rating: 0, data: [] };

  api
    .get("/analysis/sample-1")
    .then(({ data }) => {
      console.log("SAMPLE" + data);
      genreData = data;
    })
    .catch((error) => {
      // console.log("1 ERROR here");
      // console.log(genreByMovieData.max_rating);
      // genreData = genreByMovieData;
    });

  if (genreData.data.length === 0) {
    genreData = genreByMovieData;
  }

  const formattedData = genreData.data.map((item) => ({
    genre: item.main_genre,
    movies: item.count,
    rating: item.rating,
    color: getColorScale(
      genreData.min_rating,
      genreData.max_rating,
      item.rating
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
