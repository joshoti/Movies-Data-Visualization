type genreData = {
  main_genre: string;
  count: number;
  rating: number;
};

export type IGenreByMovie = {
  min_rating: number;
  max_rating: number;
  data: Array<genreData>;
};
export const genreByMovieData: IGenreByMovie = {
  min_rating: 0,
  max_rating: 10,
  data: [
    {
      count: 40,
      rating: 7,
      main_genre: "Action",
    },
    {
      count: 41,
      rating: 8,
      main_genre: "Thriller",
    },
    {
      count: 40,
      rating: 8.5,
      main_genre: "Drama",
    },
    {
      count: 49,
      rating: 4,
      main_genre: "Sci-Fi",
    },
    {
      count: 50,
      rating: 2,
      main_genre: "Horror",
    },
  ],
};
