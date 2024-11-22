import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Flex, Title, Space } from "@mantine/core";
import classes from "./Data.module.css";
import { useEffect, useRef } from "react";
import { docsScrollOptions } from "../../pages/LandingPage";
import { scrollToElement } from "../../utils/scoll";
import GenreByMovieBarChart from "../DataCharts/GenreOverview";
import RatingByRuntimeAreaChart from "../DataCharts/RatingByRuntime";
import YearByMoviesBarChart from "../DataCharts/YearlyTrend";
import RevenueByRatingBubbleChart from "../DataCharts/RevenueRatingBubble";

export const marginTop = 40;
export function Analysis() {
  // To scroll to the top manually
  useEffect(() => {
    scrollToElement("head", docsScrollOptions);
  });

  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Flex h={"100%"}>
      {/* Content section */}
      <Flex flex={1} direction="column">
        <Title
          id="head"
          mt={marginTop / 2}
          mb={marginTop / 2}
          className={classes.title}
        >
          Analysis
        </Title>

        <Carousel
          classNames={classes}
          loop
          // withIndicators
          height={500}
          plugins={[autoplay.current]}
          // onMouseEnter={autoplay.current.stop}
          // onMouseLeave={autoplay.current.reset}
        >
          <Carousel.Slide>
            <GenreByMovieBarChart />
          </Carousel.Slide>
          <Carousel.Slide>
            <RatingByRuntimeAreaChart />
          </Carousel.Slide>
          <Carousel.Slide>
            <YearByMoviesBarChart />
          </Carousel.Slide>
          <Carousel.Slide>
            <RevenueByRatingBubbleChart />
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
        <Space h={40} />
      </Flex>
    </Flex>
  );
}
