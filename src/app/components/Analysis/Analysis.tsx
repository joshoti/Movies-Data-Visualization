import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Flex, Title, Space } from "@mantine/core";
import classes from "./Analysis.module.css";
import { useEffect, useRef } from "react";
import { docsScrollOptions } from "../../pages/LandingPage";
import { scrollToElement } from "../../utils/scoll";
import GenreByMovieBarChart from "../AnalysisCharts/GenreByMovieBar";
import RatingByRuntimeAreaChart from "../AnalysisCharts/RatingByRuntimeArea";
import YearByMoviesBarChart from "../AnalysisCharts/YearByMoviesBar";
import GenreCompositeChart from "../AnalysisCharts/GenreComposite";
import MoviesByCensorRatingAreaChart from "../AnalysisCharts/MoviesByCensorArea";

export const marginTop = 40;
export const toolTipFontWeight = 600;
export const chartHeight = 500;
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
          height={chartHeight}
          // plugins={[autoplay.current]}
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
            <GenreCompositeChart />
          </Carousel.Slide>
          <Carousel.Slide>
            <MoviesByCensorRatingAreaChart />
          </Carousel.Slide>
        </Carousel>
        <Space h={40} />
      </Flex>
    </Flex>
  );
}
