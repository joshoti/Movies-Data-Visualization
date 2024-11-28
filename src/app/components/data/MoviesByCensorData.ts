type CensorDataRecord = {
  year: number;
  g_movies?: number;
  pg_movies?: number;
  r_movies?: number;
  unrated_movies?: number;
};

export type MoviesByCensorChartData = Array<CensorDataRecord>;

export const moviesByCensorData: MoviesByCensorChartData = [
  {
    unrated_movies: 10,
    year: 1920,
  },
  {
    g_movies: 1,
    pg_movies: 6,
    unrated_movies: 17,
    year: 1930,
  },
  {
    g_movies: 1,
    pg_movies: 13,
    unrated_movies: 35,
    year: 1940,
  },
  {
    g_movies: 3,
    pg_movies: 50,
    unrated_movies: 32,
    year: 1950,
  },
  {
    pg_movies: 81,
    unrated_movies: 35,
    year: 1960,
  },
  {
    pg_movies: 136,
    r_movies: 2,
    unrated_movies: 46,
    year: 1970,
  },
  {
    pg_movies: 330,
    r_movies: 5,
    unrated_movies: 58,
    year: 1980,
  },
  {
    g_movies: 1,
    pg_movies: 647,
    r_movies: 135,
    unrated_movies: 52,
    year: 1990,
  },
  {
    g_movies: 5,
    pg_movies: 1129,
    r_movies: 374,
    unrated_movies: 74,
    year: 2000,
  },
  {
    g_movies: 2,
    pg_movies: 1252,
    r_movies: 541,
    unrated_movies: 139,
    year: 2010,
  },
  {
    g_movies: 1,
    pg_movies: 239,
    r_movies: 101,
    unrated_movies: 9,
    year: 2020,
  },
];
