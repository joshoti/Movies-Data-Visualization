import { Flex, Text, Title } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { marginTop, chartHeight } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import { getColorScale } from "../../utils/colorScale";
import { api } from "../../api/axios-api";
import {
  genreByMovieData,
  GenreByMovieChartData,
} from "../data/GenreByMovieData";
import { ChartTooltip, TooltipRecord } from "./Tooltip";
import { ChartLegend } from "./Legend";

export default function GenreByMovieBarChart() {
  // Default initialization
  let genreData: GenreByMovieChartData = {
    min_rating: 0,
    max_rating: 0,
    data: [],
  };

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

  const tooltipLegendData: Array<TooltipRecord> = [
    {
      attributeName: "Movies Count",
      attributePropertyName: "movies",
      formatNumber: true,
    },
    {
      attributeName: "Average Rating",
      attributePropertyName: "rating",
      formatNumber: false,
    },
  ];

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
        Use Case: Analyze the distribution of movies by genre. Additionally, a
        heatmap displays the average ratings of different genres.
      </Text>

      <BarChart
        mt={20}
        h={chartHeight - 100}
        data={formattedData}
        dataKey="genre"
        withBarValueLabel
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
              minValue={genreData.min_rating}
              maxValue={genreData.max_rating}
            />
          ),
          verticalAlign: "bottom",
        }}
        withLegend
        xAxisLabel="Genres"
        yAxisLabel="Movies Count"
      />
    </Flex>
  );
}
