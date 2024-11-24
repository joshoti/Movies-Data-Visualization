import { Flex, Paper, Space, Text, Title } from "@mantine/core";
import { BarChart, getFilteredChartTooltipPayload } from "@mantine/charts";
import {
  marginTop,
  chartHeight,
  toolTipFontWeight,
} from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import { getColorScale } from "../../utils/colorScale";
import { api } from "../../api/axios-api";
import {
  genreByMovieData,
  GenreByMovieChartData,
} from "../data/GenreByMovieData";
import {
  TooltipColoredCircle,
  TooltipKey,
  TooltipValue,
  ChartTooltipProps,
} from "./Tooltip";

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="sm">
      <Text fw={toolTipFontWeight} mb={5}>
        {label}
      </Text>
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <>
          <Flex justify={"space-between"}>
            <Flex align={"center"}>
              <TooltipColoredCircle value={item.payload.color} />
              <TooltipKey value={`${label} Movies Count`} />
            </Flex>
            <Space w={15} />
            <TooltipValue
              value={new Intl.NumberFormat("en-US").format(item.payload.movies)}
            />
          </Flex>
          <Flex justify={"space-between"}>
            <Flex align={"center"}>
              <TooltipColoredCircle value={item.payload.color} />
              <TooltipKey value="Average Rating" />
            </Flex>
            <Space w={15} />
            <TooltipValue value={item.payload.rating} />
          </Flex>
        </>
      ))}
    </Paper>
  );
}

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
        valueFormatter={(value) => new Intl.NumberFormat("en-US").format(value)}
        series={[{ name: "movies", color: "#8884d8" }]}
        withTooltip
        tooltipProps={{
          content: ({ label, payload }) => (
            <ChartTooltip label={label} payload={payload} />
          ),
        }}
        withLegend
        xAxisLabel="Genres"
        yAxisLabel="Movies Count"
      />
    </Flex>
  );
}
