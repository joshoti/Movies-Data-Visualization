type YearDataRecord = {
  count: number;
  total_gross: number;
  year: number;
};

export type MovieByYearChartData = {
  min_gross: number;
  max_gross: number;
  data: Array<YearDataRecord>;
};

export const movieByYearData: MovieByYearChartData = {
  max_gross: 98000,
  min_gross: 0,
  data: [
    {
      count: 10,
      total_gross: 14.76,
      year: 1920,
    },
    {
      count: 24,
      total_gross: 417.39,
      year: 1930,
    },
    {
      count: 49,
      total_gross: 366.33,
      year: 1940,
    },
    {
      count: 85,
      total_gross: 984.43,
      year: 1950,
    },
    {
      count: 116,
      total_gross: 2183.55,
      year: 1960,
    },
    {
      count: 184,
      total_gross: 5390.54,
      year: 1970,
    },
    {
      count: 393,
      total_gross: 18270.77,
      year: 1980,
    },
    {
      count: 835,
      total_gross: 42492.86,
      year: 1990,
    },
    {
      count: 1582,
      total_gross: 79819.06,
      year: 2000,
    },
    {
      count: 1934,
      total_gross: 96949.39,
      year: 2010,
    },
    {
      count: 350,
      total_gross: 4316.94,
      year: 2020,
    },
  ],
};
