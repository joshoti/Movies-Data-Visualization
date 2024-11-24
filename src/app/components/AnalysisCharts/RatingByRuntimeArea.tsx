import { Flex, Title, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import { marginTop, chartHeight } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import {
  RatingByRuntimeChartData,
  ratingByRuntimeData,
} from "../data/RatingByRuntimeData";
import { api } from "../../api/axios-api";

export default function RatingByRuntimeAreaChart() {
  // default initialization
  let runtimeData: RatingByRuntimeChartData = [];

  api
    .get("/analysis/sample-2")
    .then(({ data }) => {
      console.log("SAMPLE" + data);
      runtimeData = data;
    })
    .catch((error) => {});

  if (runtimeData.length === 0) {
    runtimeData = ratingByRuntimeData;
  }

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
        h={chartHeight - 100}
        data={runtimeData}
        curveType="natural"
        dataKey="runtime"
        withLegend
        withPointLabels
        gridAxis="xy"
        xAxisLabel="Runtime (Mins)"
        yAxisLabel="Average Rating"
        series={[
          { name: "rating", label: "Average Rating", color: "indigo.6" },
        ]}
      />
    </Flex>
  );
}
