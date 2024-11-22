import { Flex, Title, Text } from "@mantine/core";
import { BubbleChart } from "@mantine/charts";
import { marginTop } from "../Data/Analysis";
import classes from "../Data/Data.module.css";

export default function RevenueByRatingBubbleChart() {
  const data = [
    {
      genre: "some",
      rating: 10,
      gross: 10,
      runtime: 1200,
    },
    {
      rating: 8.5,
      gross: 60,
      runtime: 630,
    },
    {
      rating: 8,
      gross: 70,
      runtime: 700,
    },
    {
      rating: 9,
      gross: 20,
      runtime: 802,
    },
    {
      rating: 6,
      gross: 100,
      runtime: 910,
    },
  ];
  const formattedData = data.map((item) => ({
    rating: item.rating,
    totalGross: item.gross,
    runtime: item.runtime,
  }));

  return (
    <Flex direction={"column"}>
      <Title
        id="head"
        mt={marginTop / 2}
        mb={marginTop / 2}
        className={classes.tableOfContentTitle}
      >
        Revenue vs. Rating by Runtime
      </Title>
      <Text mb={10} className={classes.regularText}>
        Use Case: Examine the relationship between Total_Gross and Rating,
        grouped by Runtime.
      </Text>
      <BubbleChart
        h={400}
        data={formattedData}
        range={[16, 225]}
        dataKey={{ x: "rating", y: "totalGross", z: "runtime" }}
        // color="blue"
        label="Gross/Rating"
        valueFormatter={(value) => `$${value.toFixed(2)}M USD`}
      />
    </Flex>
  );
}
