import { Flex, Title, Text } from "@mantine/core";
import { CompositeChart } from "@mantine/charts";
import { marginTop, chartHeight } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";

export default function GenreCompositeChart() {
  const data = [
    {
      genre: "Action",
      gross: 1090,
      runtime: 1200,
    },
    {
      genre: "Horror",
      gross: 1600,
      runtime: 630,
    },
    {
      genre: "Sci-Fi",
      gross: 700,
      runtime: 700,
    },
    {
      genre: "Thriller",
      gross: 1600,
      runtime: 802,
    },
    {
      genre: "Drama",
      gross: 2000,
      runtime: 910,
    },
  ];
  const formattedData = data.map((item) => ({
    genre: item.genre,
    "Total Gross": item.gross,
    "Runtime (mins)": item.runtime,
  }));

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
        Use Case: Examine the relationship between Total_Gross and Runtime,
        grouped by Genre.
      </Text>
      <CompositeChart
        h={chartHeight - 150}
        data={formattedData}
        dataKey={"genre"}
        withBarValueLabel
        withPointLabels
        series={[
          {
            name: "Runtime (mins)",
            color: "rgba(18, 120, 255, 0.2)",
            type: "bar",
          },
          { name: "Total Gross", color: "red.8", type: "line" },
          { name: "Rating", color: "yellow.8", type: "area" },
        ]}
        curveType="natural"
      />
    </Flex>
  );
}
