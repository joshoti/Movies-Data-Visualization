import { useState } from "react";
import { Flex, Title, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import { marginTop, chartHeight, getDataFromApi } from "../Analysis/Analysis";
import classes from "../Analysis/Analysis.module.css";
import {
  RatingByRuntimeChartData,
  ratingByRuntimeData,
} from "../data/RatingByRuntimeData";

export default function RatingByRuntimeAreaChart() {
  const [runtimeData, setRuntimeData] = useState<RatingByRuntimeChartData>([]);

  getDataFromApi({
    endpoint: "/analysis/sample-2",
    dataState: runtimeData,
    setDataCallback: setRuntimeData,
    defaultData: ratingByRuntimeData,
    baseCaseProperty: "length",
    baseCaseValue: 0,
  });

  return (
    <Flex direction={"column"}>
      <Title
        id="head"
        mt={marginTop / 2}
        mb={marginTop / 2}
        className={classes.chartTitle}
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
