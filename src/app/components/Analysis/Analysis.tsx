import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Flex, Title } from "@mantine/core";
import classes from "./Analysis.module.css";
import GenreByMovieBarChart from "../AnalysisCharts/GenreByMovieBar";
import RatingByRuntimeAreaChart from "../AnalysisCharts/RatingByRuntimeArea";
import YearByMoviesBarChart from "../AnalysisCharts/YearByMoviesBar";
import GenreCompositeChart from "../AnalysisCharts/GenreComposite";
import MoviesByCensorRatingAreaChart from "../AnalysisCharts/MoviesByCensorArea";
import { api } from "../../api/axios-api";

export const marginTop = 40;
export const toolTipFontWeight = 600;
export const chartHeight = 550;
export const toolTipSpacing = 30;

export const getDataFromApi = ({
  endpoint,
  dataState,
  setDataCallback,
  defaultData,
  baseCaseProperty,
  baseCaseValue,
}: any) => {
  if (dataState[baseCaseProperty] !== baseCaseValue) {
    return;
  }
  api
    .get(endpoint)
    .then(({ data }) => {
      setDataCallback(data);
    })
    .catch((error) => {
      setDataCallback(defaultData);
    });
};

export function Analysis() {
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
          height={chartHeight}
          draggable={false}
          plugins={[autoplay.current]}
          // onMouseEnter={autoplay.current.stop}
          // onMouseLeave={() => autoplay.current.play(true)}
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
      </Flex>
    </Flex>
  );
}
