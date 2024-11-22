import { Flex, Title, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import { marginTop } from "../Data/Analysis";
import classes from "../Data/Data.module.css";

export default function RatingByRuntime() {
  const data = [
    {
      rating: 10,
      runtime: 40,
    },
    {
      rating: 8.5,
      runtime: 60,
    },
    {
      rating: 8,
      runtime: 70,
    },
    {
      rating: 9,
      runtime: 80,
    },
    {
      rating: 6,
      runtime: 90,
    },
  ];
  const formattedData = data.map((item) => ({
    runtime: item.runtime,
    rating: item.rating,
  }));

  return (
    <Flex direction={"column"}>
      <Title
        id="head"
        mt={marginTop / 2}
        mb={marginTop / 2}
        className={classes.tableOfContentTitle}
      >
        Correlation Between Rating and Runtime
      </Title>
      <Text mb={10} className={classes.regularText}>
        Use Case: Check if longer movies tend to have higher or lower ratings
      </Text>
      <AreaChart
        h={400}
        data={formattedData}
        curveType="natural"
        dataKey="runtime"
        withLegend
        withPointLabels
        xAxisLabel="Runtime (Mins)"
        yAxisLabel="Rating"
        series={[{ name: "rating", color: "indigo.6" }]}
      />
    </Flex>
  );
}
