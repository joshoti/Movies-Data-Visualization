import { Flex, Title, Text } from "@mantine/core";
import { CompositeChart } from "@mantine/charts";
import { marginTop, chartHeight } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import {
  genreCompositeData,
  GenreCompositeT,
} from "../data/GenreCompositeData";
import { api } from "../../api/axios-api";

export default function GenreCompositeChart() {
  // default initialization
  let genreData: GenreCompositeT = [];

  api
    .get("/analysis/sample-4")
    .then(({ data }) => {
      console.log("SAMPLE" + data);
      genreData = data;
    })
    .catch((error) => {});

  if (genreData.length === 0) {
    genreData = genreCompositeData;
  }

  return (
    <Flex direction={"column"}>
      <Title
        id="head"
        mt={marginTop / 2}
        mb={marginTop / 2}
        className={classes.tableOfContentTitle}
      >
        Gross By Runtime vs Genre
      </Title>
      <Text mb={10} className={classes.regularText}>
        Use Case: Examine the relationship between Total Gross and Runtime,
        grouped by Genre.
      </Text>
      <CompositeChart
        h={chartHeight - 150}
        pl={10}
        pt={10}
        data={genreData}
        dataKey={"main_genre"}
        xAxisLabel="Genres"
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
            label: "Total Gross",
            color: "red.8",
            type: "line",
          },
          { name: "Rating", color: "yellow.8", type: "area" },
        ]}
        curveType="natural"
      />
    </Flex>
  );
}
