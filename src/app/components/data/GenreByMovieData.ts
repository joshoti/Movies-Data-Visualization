type GenreDataRecord = {
  main_genre: string;
  count: number;
  rating: number;
};

export type GenreByMovieChartData = {
  min_rating: number;
  max_rating: number;
  data: Array<GenreDataRecord>;
};
export const genreByMovieData: GenreByMovieChartData = {
  max_rating: 7.5,
  min_rating: 6,
  data: [
    {
      count: 1577,
      main_genre: "Action",
      rating: 6.53,
    },
    {
      count: 321,
      main_genre: "Animation",
      rating: 7.03,
    },
    {
      count: 355,
      main_genre: "Biography",
      rating: 7.23,
    },
    {
      count: 296,
      main_genre: "Adventure",
      rating: 6.74,
    },
    {
      count: 4,
      main_genre: "Western",
      rating: 8.12,
    },
    {
      count: 1027,
      main_genre: "Drama",
      rating: 7.08,
    },
    {
      count: 447,
      main_genre: "Crime",
      rating: 7.08,
    },
    {
      count: 1350,
      main_genre: "Comedy",
      rating: 6.54,
    },
    {
      count: 142,
      main_genre: "Horror",
      rating: 6.05,
    },
    {
      count: 26,
      main_genre: "Mystery",
      rating: 7.16,
    },
    {
      count: 3,
      main_genre: "Film-Noir",
      rating: 7.63,
    },
    {
      count: 13,
      main_genre: "Fantasy",
      rating: 6.03,
    },
    {
      count: 1,
      main_genre: "Musical",
      rating: 7.0,
    },
  ],
};
