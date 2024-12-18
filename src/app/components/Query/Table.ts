/**
 * For the QueryBox Field dropdown menu
 */
export const tableColumnNames = [
  { value: "title", label: "Title" },
  { value: "year", label: "Year" },
  { value: "director", label: "Director" },
  { value: "actor", label: "Actors" },
  { value: "rating", label: "Rating" },
  { value: "runtime", label: "Runtime" },
  { value: "censor", label: "Censor" },
  { value: "gross", label: "Total Gross" },
  { value: "main_genre", label: "Main Genre" },
];

/**
 * For the QueryBox Operators dropdown menu
 */
export const operators = ["=", "!=", ">", ">=", "<", "<=", "LIKE"];

/**
 * Provides an interface for the DynamicTable to check what headers to
 * display and how to display them
 */
export const TableHeaderMap = {
  Movie_Title: "Movie Title",
  Year: "Year",
  Director: "Director",
  Actors: "Actors",
  Rating: "Rating",
  "Runtime(Mins)": "Runtime (Mins)",
  Censor: "Censor",
  Total_Gross: "Total Gross",
  main_genre: "Main Genre",
  side_genre: "Side Genre",
};

export type TableHeaders = {
  Movie_Title?: string;
  Year?: number;
  Director?: string;
  Actors?: string;
  Rating?: number;
  "Runtime(Mins)"?: number;
  Censor?: string;
  Total_Gross?: string;
  main_genre?: string;
  side_genre?: string;
};

export const defaultTable = [
  {
    Movie_Title: "Kantara",
    Year: 2022,
    Director: "Rishab Shetty",
    Actors: "Rishab Shetty, Sapthami Gowda, Kishore Kumar G., Achyuth Kumar",
    Rating: 9.3,
    "Runtime(Mins)": 148,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "The Dark Knight",
    Year: 2008,
    Director: "Christopher Nolan",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Rating: 9.0,
    "Runtime(Mins)": 152,
    Censor: "UA",
    Total_Gross: "$534.86M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "The Lord of the Rings: The Return of the King",
    Year: 2003,
    Director: "Peter Jackson",
    Actors: "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
    Rating: 9.0,
    "Runtime(Mins)": 201,
    Censor: "U",
    Total_Gross: "$377.85M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "Inception",
    Year: 2010,
    Director: "Christopher Nolan",
    Actors:
      "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Ken Watanabe",
    Rating: 8.8,
    "Runtime(Mins)": 148,
    Censor: "UA",
    Total_Gross: "$292.58M",
    main_genre: "Action",
    side_genre: " Adventure,  Sci-Fi",
  },
  {
    Movie_Title: "The Lord of the Rings: The Two Towers",
    Year: 2002,
    Director: "Peter Jackson",
    Actors: "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom",
    Rating: 8.8,
    "Runtime(Mins)": 179,
    Censor: "UA",
    Total_Gross: "$342.55M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: 2001,
    Director: "Peter Jackson",
    Actors: "Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean",
    Rating: 8.8,
    "Runtime(Mins)": 178,
    Censor: "U",
    Total_Gross: "$315.54M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "The Matrix",
    Year: 1999,
    Director: "Directors:Lana Wachowski, Lilly Wachowski",
    Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    Rating: 8.7,
    "Runtime(Mins)": 136,
    Censor: "A",
    Total_Gross: "$171.48M",
    main_genre: "Action",
    side_genre: " Sci-Fi",
  },
  {
    Movie_Title: "The Empire Strikes Back",
    Year: 1980,
    Director: "Irvin Kershner",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    Rating: 8.7,
    "Runtime(Mins)": 124,
    Censor: "UA",
    Total_Gross: "$290.48M",
    main_genre: "Action",
    side_genre: " Adventure,  Fantasy",
  },
  {
    Movie_Title: "Terminator 2: Judgment Day",
    Year: 1991,
    Director: "James Cameron",
    Actors:
      "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
    Rating: 8.6,
    "Runtime(Mins)": 137,
    Censor: "A",
    Total_Gross: "$204.84M",
    main_genre: "Action",
    side_genre: " Sci-Fi",
  },
  {
    Movie_Title: "Star Wars",
    Year: 1977,
    Director: "George Lucas",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness",
    Rating: 8.6,
    "Runtime(Mins)": 121,
    Censor: "U",
    Total_Gross: "$322.74M",
    main_genre: "Action",
    side_genre: " Adventure,  Fantasy",
  },
  {
    Movie_Title: "Seppuku",
    Year: 1962,
    Director: "Masaki Kobayashi",
    Actors: "Tatsuya Nakadai, Akira Ishihama, Shima Iwashita, Tetsurô Tanba",
    Rating: 8.6,
    "Runtime(Mins)": 133,
    Censor: "Not Rated",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama,  Mystery",
  },
  {
    Movie_Title: "Shichinin no samurai",
    Year: 1954,
    Director: "Akira Kurosawa",
    Actors: "Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki",
    Rating: 8.6,
    "Runtime(Mins)": 207,
    Censor: "U",
    Total_Gross: "$0.27M",
    main_genre: "Action",
    side_genre: " Drama",
  },
  {
    Movie_Title: "Kaithi",
    Year: 2019,
    Director: "Lokesh Kanagaraj",
    Actors: "Karthi, Narain, Arjun Das, George Maryan",
    Rating: 8.5,
    "Runtime(Mins)": 145,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Adventure,  Crime",
  },
  {
    Movie_Title: "Asuran",
    Year: 2019,
    Director: "Vetrimaaran",
    Actors: "Dhanush, Manju Warrier, Prakash Raj, Pasupathy",
    Rating: 8.5,
    "Runtime(Mins)": 141,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama",
  },
  {
    Movie_Title: "Sita Ramam",
    Year: 2022,
    Director: "Hanu Raghavapudi",
    Actors: "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna, Sumanth",
    Rating: 8.5,
    "Runtime(Mins)": 163,
    Censor: "U",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama,  Mystery",
  },
  {
    Movie_Title: "Gladiator",
    Year: 2000,
    Director: "Ridley Scott",
    Actors: "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
    Rating: 8.5,
    "Runtime(Mins)": 155,
    Censor: "UA",
    Total_Gross: "$187.71M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "Léon",
    Year: 1994,
    Director: "Luc Besson",
    Actors: "Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello",
    Rating: 8.5,
    "Runtime(Mins)": 110,
    Censor: "A",
    Total_Gross: "$19.50M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Vikram",
    Year: 2022,
    Director: "Lokesh Kanagaraj",
    Actors: "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil, Narain",
    Rating: 8.4,
    "Runtime(Mins)": 175,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Thriller",
  },
  {
    Movie_Title: "Spider-Man: Into the Spider-Verse",
    Year: 2018,
    Director: "Directors:Bob Persichetti, Peter Ramsey, Rodney Rothman",
    Actors: "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
    Rating: 8.4,
    "Runtime(Mins)": 117,
    Censor: "U",
    Total_Gross: "$190.24M",
    main_genre: "Animation",
    side_genre: " Action,  Adventure",
  },
  {
    Movie_Title: "Avengers: Endgame",
    Year: 2019,
    Director: "Directors:Anthony Russo, Joe Russo",
    Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    Rating: 8.4,
    "Runtime(Mins)": 181,
    Censor: "UA",
    Total_Gross: "$858.37M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "Avengers: Infinity War",
    Year: 2018,
    Director: "Directors:Anthony Russo, Joe Russo",
    Actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    Rating: 8.4,
    "Runtime(Mins)": 149,
    Censor: "UA",
    Total_Gross: "$678.82M",
    main_genre: "Action",
    side_genre: " Adventure,  Sci-Fi",
  },
  {
    Movie_Title: "Top Gun: Maverick",
    Year: 2022,
    Director: "Joseph Kosinski",
    Actors: "Tom Cruise, Jennifer Connelly, Miles Teller, Val Kilmer",
    Rating: 8.4,
    "Runtime(Mins)": 130,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama",
  },
  {
    Movie_Title: "The Dark Knight Rises",
    Year: 2012,
    Director: "Christopher Nolan",
    Actors: "Christian Bale, Tom Hardy, Anne Hathaway, Gary Oldman",
    Rating: 8.4,
    "Runtime(Mins)": 164,
    Censor: "UA",
    Total_Gross: "$448.14M",
    main_genre: "Action",
    side_genre: " Drama",
  },
  {
    Movie_Title: "K.G.F: Chapter 2",
    Year: 2022,
    Director: "Prashanth Neel",
    Actors: "Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty",
    Rating: 8.4,
    "Runtime(Mins)": 168,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Shershaah",
    Year: 2021,
    Director: "Vishnuvardhan",
    Actors: "Sidharth Malhotra, Kiara Advani, Shiv Panditt, Pranay Pachauri",
    Rating: 8.4,
    "Runtime(Mins)": 135,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Biography,  Drama",
  },
  {
    Movie_Title: "Oldeuboi",
    Year: 2003,
    Director: "Park Chan-wook",
    Actors: "Choi Min-sik, Yoo Ji-tae, Kang Hye-jeong, Kim Byeong-Ok",
    Rating: 8.4,
    "Runtime(Mins)": 101,
    Censor: "A",
    Total_Gross: "$0.71M",
    main_genre: "Action",
    side_genre: " Drama,  Mystery",
  },
  {
    Movie_Title: "Mononoke-hime",
    Year: 1997,
    Director: "Hayao Miyazaki",
    Actors: "Yôji Matsuda, Yuriko Ishida, Yûko Tanaka, Billy Crudup",
    Rating: 8.4,
    "Runtime(Mins)": 134,
    Censor: "U",
    Total_Gross: "$2.38M",
    main_genre: "Animation",
    side_genre: " Action,  Adventure",
  },
  {
    Movie_Title: "Aliens",
    Year: 1986,
    Director: "James Cameron",
    Actors: "Sigourney Weaver, Michael Biehn, Carrie Henn, Paul Reiser",
    Rating: 8.4,
    "Runtime(Mins)": 137,
    Censor: "U",
    Total_Gross: "$85.16M",
    main_genre: "Action",
    side_genre: " Adventure,  Sci-Fi",
  },
  {
    Movie_Title: "Raiders of the Lost Ark",
    Year: 1981,
    Director: "Steven Spielberg",
    Actors: "Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies",
    Rating: 8.4,
    "Runtime(Mins)": 115,
    Censor: "A",
    Total_Gross: "$248.16M",
    main_genre: "Action",
    side_genre: " Adventure",
  },
  {
    Movie_Title: "Vikram Vedha",
    Year: 2017,
    Director: "Directors:Gayatri, Pushkar, Gowtham Selvaraj",
    Actors: "Madhavan, Vijay Sethupathi, Shraddha Srinath, Kathir",
    Rating: 8.3,
    "Runtime(Mins)": 147,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Dangal",
    Year: 2016,
    Director: "Nitesh Tiwari",
    Actors: "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra",
    Rating: 8.3,
    "Runtime(Mins)": 161,
    Censor: "U",
    Total_Gross: "$12.39M",
    main_genre: "Action",
    side_genre: " Biography,  Drama",
  },
  {
    Movie_Title: "Spider-Man: No Way Home",
    Year: 2021,
    Director: "Jon Watts",
    Actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon",
    Rating: 8.3,
    "Runtime(Mins)": 148,
    Censor: "UA",
    Total_Gross: "$804.75M",
    main_genre: "Action",
    side_genre: " Adventure,  Fantasy",
  },
  {
    Movie_Title: "Heat",
    Year: 1995,
    Director: "Michael Mann",
    Actors: "Al Pacino, Robert De Niro, Val Kilmer, Jon Voight",
    Rating: 8.3,
    "Runtime(Mins)": 170,
    Censor: "A",
    Total_Gross: "$67.44M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Star Wars: Episode VI - Return of the Jedi",
    Year: 1983,
    Director: "Richard Marquand",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    Rating: 8.3,
    "Runtime(Mins)": 131,
    Censor: "U",
    Total_Gross: "$309.13M",
    main_genre: "Action",
    side_genre: " Adventure,  Fantasy",
  },
  {
    Movie_Title: "North by Northwest",
    Year: 1959,
    Director: "Alfred Hitchcock",
    Actors: "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
    Rating: 8.3,
    "Runtime(Mins)": 136,
    Censor: "U",
    Total_Gross: "$13.28M",
    main_genre: "Action",
    side_genre: " Adventure,  Mystery",
  },
  {
    Movie_Title: "Major",
    Year: 2022,
    Director: "Sashi Kiran Tikka",
    Actors: "Adivi Sesh, Prakash Raj, Revathi, Saiee Manjrekar",
    Rating: 8.2,
    "Runtime(Mins)": 150,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Biography,  Drama",
  },
  {
    Movie_Title: "1917",
    Year: 2019,
    Director: "Sam Mendes",
    Actors: "Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth",
    Rating: 8.2,
    "Runtime(Mins)": 119,
    Censor: "R",
    Total_Gross: "$159.23M",
    main_genre: "Action",
    side_genre: " Drama,  War",
  },
  {
    Movie_Title: "Uri: The Surgical Strike",
    Year: 2019,
    Director: "Aditya Dhar",
    Actors: "Vicky Kaushal, Paresh Rawal, Mohit Raina, Yami Gautam",
    Rating: 8.2,
    "Runtime(Mins)": 138,
    Censor: "UA",
    Total_Gross: "$4.19M",
    main_genre: "Action",
    side_genre: " Drama,  History",
  },
  {
    Movie_Title: "K.G.F: Chapter 1",
    Year: 2018,
    Director: "Prashanth Neel",
    Actors: "Yash, Srinidhi Shetty, Ramachandra Raju, Archana Jois",
    Rating: 8.2,
    "Runtime(Mins)": 156,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Dag II",
    Year: 2016,
    Director: "Alper Caglar",
    Actors: "Caglar Ertugrul, Ufuk Bayraktar, Ahu Türkpençe, Murat Serezli",
    Rating: 8.2,
    "Runtime(Mins)": 135,
    Censor: "Not Rated",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama,  War",
  },
  {
    Movie_Title: "Baahubali 2: The Conclusion",
    Year: 2017,
    Director: "S.S. Rajamouli",
    Actors: "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia",
    Rating: 8.2,
    "Runtime(Mins)": 167,
    Censor: "UA",
    Total_Gross: "$20.19M",
    main_genre: "Action",
    side_genre: " Drama",
  },
  {
    Movie_Title: "Gangs of Wasseypur",
    Year: 2012,
    Director: "Anurag Kashyap",
    Actors: "Manoj Bajpayee, Ashish Chhipa, Richa Chadha, Nawazuddin Siddiqui",
    Rating: 8.2,
    "Runtime(Mins)": 321,
    Censor: "A",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Comedy,  Crime",
  },
  {
    Movie_Title: "Paan Singh Tomar",
    Year: 2012,
    Director: "Tigmanshu Dhulia",
    Actors: "Irrfan Khan, Mahie Gill, Rajesh Abhay, Hemendra Dandotiya",
    Rating: 8.2,
    "Runtime(Mins)": 135,
    Censor: "UA",
    Total_Gross: "$0.04M",
    main_genre: "Action",
    side_genre: " Biography,  Crime",
  },
  {
    Movie_Title: "Warrior",
    Year: 2011,
    Director: "Gavin O'Connor",
    Actors: "Tom Hardy, Nick Nolte, Joel Edgerton, Jennifer Morrison",
    Rating: 8.2,
    "Runtime(Mins)": 140,
    Censor: "UA",
    Total_Gross: "$13.66M",
    main_genre: "Action",
    side_genre: " Drama,  Sport",
  },
  {
    Movie_Title: "Kimetsu no Yaiba: Mugen Ressha-Hen",
    Year: 2020,
    Director: "Haruo Sotozaki",
    Actors: "Natsuki Hanae, Akari Kitô, Yoshitsugu Matsuoka, Hiro Shimono",
    Rating: 8.2,
    "Runtime(Mins)": 117,
    Censor: "UA",
    Total_Gross: "$47.70M",
    main_genre: "Animation",
    side_genre: " Action,  Adventure",
  },
  {
    Movie_Title: "V for Vendetta",
    Year: 2005,
    Director: "James McTeigue",
    Actors: "Hugo Weaving, Natalie Portman, Rupert Graves, Stephen Rea",
    Rating: 8.2,
    "Runtime(Mins)": 132,
    Censor: "UA",
    Total_Gross: "$70.51M",
    main_genre: "Action",
    side_genre: " Drama,  Sci-Fi",
  },
  {
    Movie_Title: "Batman Begins",
    Year: 2005,
    Director: "Christopher Nolan",
    Actors: "Christian Bale, Michael Caine, Ken Watanabe, Liam Neeson",
    Rating: 8.2,
    "Runtime(Mins)": 140,
    Censor: "UA",
    Total_Gross: "$206.85M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Kill Bill: Vol. 1",
    Year: 2003,
    Director: "Quentin Tarantino",
    Actors: "Uma Thurman, David Carradine, Daryl Hannah, Michael Madsen",
    Rating: 8.2,
    "Runtime(Mins)": 111,
    Censor: "A",
    Total_Gross: "$70.10M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Lock, Stock and Two Smoking Barrels",
    Year: 1998,
    Director: "Guy Ritchie",
    Actors: "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
    Rating: 8.2,
    "Runtime(Mins)": 107,
    Censor: "A",
    Total_Gross: "$3.90M",
    main_genre: "Action",
    side_genre: " Comedy,  Crime",
  },
  {
    Movie_Title: "Jurassic Park",
    Year: 1993,
    Director: "Steven Spielberg",
    Actors: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
    Rating: 8.2,
    "Runtime(Mins)": 127,
    Censor: "UA",
    Total_Gross: "$402.45M",
    main_genre: "Action",
    side_genre: " Adventure,  Sci-Fi",
  },
  {
    Movie_Title: "Indiana Jones and the Last Crusade",
    Year: 1989,
    Director: "Steven Spielberg",
    Actors: "Harrison Ford, Sean Connery, Alison Doody, Denholm Elliott",
    Rating: 8.2,
    "Runtime(Mins)": 127,
    Censor: "U",
    Total_Gross: "$197.17M",
    main_genre: "Action",
    side_genre: " Adventure",
  },
  {
    Movie_Title: "Die Hard",
    Year: 1988,
    Director: "John McTiernan",
    Actors: "Bruce Willis, Alan Rickman, Bonnie Bedelia, Reginald VelJohnson",
    Rating: 8.2,
    "Runtime(Mins)": 132,
    Censor: "A",
    Total_Gross: "$83.01M",
    main_genre: "Action",
    side_genre: " Thriller",
  },
  {
    Movie_Title: "Ran",
    Year: 1985,
    Director: "Akira Kurosawa",
    Actors: "Tatsuya Nakadai, Akira Terao, Jinpachi Nezu, Daisuke Ryû",
    Rating: 8.2,
    "Runtime(Mins)": 162,
    Censor: "U",
    Total_Gross: "$4.14M",
    main_genre: "Action",
    side_genre: " Drama,  War",
  },
  {
    Movie_Title: "Yôjinbô",
    Year: 1961,
    Director: "Akira Kurosawa",
    Actors: "Toshirô Mifune, Eijirô Tôno, Tatsuya Nakadai, Yôko Tsukasa",
    Rating: 8.2,
    "Runtime(Mins)": 110,
    Censor: "U",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama,  Thriller",
  },
  {
    Movie_Title: "The General",
    Year: 1926,
    Director: "Directors:Clyde Bruckman, Buster Keaton",
    Actors: "Buster Keaton, Marion Mack, Glen Cavender, Jim Farley",
    Rating: 8.2,
    "Runtime(Mins)": 67,
    Censor: "Not Rated",
    Total_Gross: "$1.03M",
    main_genre: "Action",
    side_genre: " Adventure,  Comedy",
  },
  {
    Movie_Title: "Sherlock Jr.",
    Year: 1924,
    Director: "Buster Keaton",
    Actors: "Buster Keaton, Kathryn McGuire, Joe Keaton, Erwin Connelly",
    Rating: 8.2,
    "Runtime(Mins)": 45,
    Censor: "Not Rated",
    Total_Gross: "$0.98M",
    main_genre: "Action",
    side_genre: " Comedy,  Romance",
  },
  {
    Movie_Title: "Everything Everywhere All at Once",
    Year: 2022,
    Director: "Directors:Dan Kwan, Daniel Scheinert",
    Actors: "Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis, Ke Huy Quan",
    Rating: 8.1,
    "Runtime(Mins)": 139,
    Censor: "A",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Adventure,  Comedy",
  },
  {
    Movie_Title: "Bajrangi Bhaijaan",
    Year: 2015,
    Director: "Kabir Khan",
    Actors:
      "Salman Khan, Harshaali Malhotra, Nawazuddin Siddiqui, Kareena Kapoor",
    Rating: 8.1,
    "Runtime(Mins)": 163,
    Censor: "UA",
    Total_Gross: "$8.18M",
    main_genre: "Action",
    side_genre: " Adventure,  Comedy",
  },
  {
    Movie_Title: "Logan",
    Year: 2017,
    Director: "James Mangold",
    Actors: "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
    Rating: 8.1,
    "Runtime(Mins)": 137,
    Censor: "A",
    Total_Gross: "$226.28M",
    main_genre: "Action",
    side_genre: " Drama,  Sci-Fi",
  },
  {
    Movie_Title: "Rush",
    Year: 2013,
    Director: "Ron Howard",
    Actors: "Daniel Brühl, Chris Hemsworth, Olivia Wilde, Alexandra Maria Lara",
    Rating: 8.1,
    "Runtime(Mins)": 123,
    Censor: "R",
    Total_Gross: "$26.95M",
    main_genre: "Action",
    side_genre: " Biography,  Drama",
  },
  {
    Movie_Title: "Ford v Ferrari",
    Year: 2019,
    Director: "James Mangold",
    Actors: "Matt Damon, Christian Bale, Jon Bernthal, Caitríona Balfe",
    Rating: 8.1,
    "Runtime(Mins)": 152,
    Censor: "UA",
    Total_Gross: "$117.62M",
    main_genre: "Action",
    side_genre: " Biography,  Drama",
  },
  {
    Movie_Title: "Mad Max: Fury Road",
    Year: 2015,
    Director: "George Miller",
    Actors: "Tom Hardy, Charlize Theron, Nicholas Hoult, Zoë Kravitz",
    Rating: 8.1,
    "Runtime(Mins)": 120,
    Censor: "UA",
    Total_Gross: "$154.06M",
    main_genre: "Action",
    side_genre: " Adventure,  Sci-Fi",
  },
  {
    Movie_Title: "A Wednesday",
    Year: 2008,
    Director: "Neeraj Pandey",
    Actors: "Anupam Kher, Naseeruddin Shah, Veerendra Saxena, Mahesh Kanual",
    Rating: 8.1,
    "Runtime(Mins)": 104,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "How to Train Your Dragon",
    Year: 2010,
    Director: "Directors:Dean DeBlois, Chris Sanders",
    Actors:
      "Jay Baruchel, Gerard Butler, Christopher Mintz-Plasse, Craig Ferguson",
    Rating: 8.1,
    "Runtime(Mins)": 98,
    Censor: "U",
    Total_Gross: "$217.58M",
    main_genre: "Animation",
    side_genre: " Action,  Adventure",
  },
  {
    Movie_Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    Year: 2003,
    Director: "Gore Verbinski",
    Actors: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
    Rating: 8.1,
    "Runtime(Mins)": 143,
    Censor: "UA",
    Total_Gross: "$305.41M",
    main_genre: "Action",
    side_genre: " Adventure,  Fantasy",
  },
  {
    Movie_Title: "Hera Pheri",
    Year: 2000,
    Director: "Priyadarshan",
    Actors: "Akshay Kumar, Suniel Shetty, Paresh Rawal, Tabu",
    Rating: 8.1,
    "Runtime(Mins)": 156,
    Censor: "U",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Comedy,  Crime",
  },
  {
    Movie_Title: "Sarfarosh",
    Year: 1999,
    Director: "John Mathew Matthan",
    Actors: "Aamir Khan, Naseeruddin Shah, Sonali Bendre, Mukesh Rishi",
    Rating: 8.1,
    "Runtime(Mins)": 174,
    Censor: "A",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama,  Thriller",
  },
  {
    Movie_Title: "The Iron Giant",
    Year: 1999,
    Director: "Brad Bird",
    Actors: "Eli Marienthal, Harry Connick Jr., Jennifer Aniston, Vin Diesel",
    Rating: 8.1,
    "Runtime(Mins)": 86,
    Censor: "U",
    Total_Gross: "$23.16M",
    main_genre: "Animation",
    side_genre: " Action,  Adventure",
  },
  {
    Movie_Title: "The Terminator",
    Year: 1984,
    Director: "James Cameron",
    Actors:
      "Arnold Schwarzenegger, Linda Hamilton, Michael Biehn, Paul Winfield",
    Rating: 8.1,
    "Runtime(Mins)": 107,
    Censor: "UA",
    Total_Gross: "$38.40M",
    main_genre: "Action",
    side_genre: " Sci-Fi",
  },
  {
    Movie_Title: "Blade Runner",
    Year: 1982,
    Director: "Ridley Scott",
    Actors: "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
    Rating: 8.1,
    "Runtime(Mins)": 117,
    Censor: "UA",
    Total_Gross: "$32.87M",
    main_genre: "Action",
    side_genre: " Drama,  Sci-Fi",
  },
  {
    Movie_Title: "Sholay",
    Year: 1975,
    Director: "Ramesh Sippy",
    Actors: "Sanjeev Kumar, Dharmendra, Amitabh Bachchan, Amjad Khan",
    Rating: 8.1,
    "Runtime(Mins)": 204,
    Censor: "U",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Adventure,  Comedy",
  },
  {
    Movie_Title: "Kakushi-toride no san-akunin",
    Year: 1958,
    Director: "Akira Kurosawa",
    Actors: "Toshirô Mifune, Misa Uehara, Minoru Chiaki, Kamatari Fujiwara",
    Rating: 8.1,
    "Runtime(Mins)": 139,
    Censor: "Not Rated",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "White Heat",
    Year: 1949,
    Director: "Raoul Walsh",
    Actors: "James Cagney, Virginia Mayo, Edmond O'Brien, Margaret Wycherly",
    Rating: 8.1,
    "Runtime(Mins)": 114,
    Censor: "Not Rated",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "RRR (Rise Roar Revolt)",
    Year: 2022,
    Director: "S.S. Rajamouli",
    Actors: "N.T. Rama Rao Jr., Ram Charan Teja, Ajay Devgn, Alia Bhatt",
    Rating: 8.0,
    "Runtime(Mins)": 187,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama",
  },
  {
    Movie_Title: "Arjun Reddy",
    Year: 2017,
    Director: "Sandeep Reddy Vanga",
    Actors: "Vijay Deverakonda, Shalini Pandey, Jia Sharma, Kanchana",
    Rating: 8.0,
    "Runtime(Mins)": 182,
    Censor: "A",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama,  Romance",
  },
  {
    Movie_Title: "Kaththi",
    Year: 2014,
    Director: "A.R. Murugadoss",
    Actors:
      "Joseph Vijay, Samantha Ruth Prabhu, Neil Nitin Mukesh, Tota Roy Chowdhury",
    Rating: 8.0,
    "Runtime(Mins)": 166,
    Censor: "U",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama",
  },
  {
    Movie_Title: "Haider",
    Year: 2014,
    Director: "Vishal Bhardwaj",
    Actors: "Shahid Kapoor, Tabu, Shraddha Kapoor, Kay Kay Menon",
    Rating: 8.0,
    "Runtime(Mins)": 160,
    Censor: "UA",
    Total_Gross: "$0.90M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Bãhubali: The Beginning",
    Year: 2015,
    Director: "S.S. Rajamouli",
    Actors: "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia",
    Rating: 8.0,
    "Runtime(Mins)": 159,
    Censor: "UA",
    Total_Gross: "$6.74M",
    main_genre: "Action",
    side_genre: " Drama",
  },
  {
    Movie_Title: "1 - Nenokkadine",
    Year: 2014,
    Director: "Sukumar",
    Actors: "Mahesh Babu, Kriti Sanon, Nassar, Pradeep Singh Rawat",
    Rating: 8.0,
    "Runtime(Mins)": 170,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Thriller",
  },
  {
    Movie_Title: "Thuppakki",
    Year: 2012,
    Director: "A.R. Murugadoss",
    Actors: "Joseph Vijay, Kajal Aggarwal, Vidyut Jammwal, Sathyan",
    Rating: 8.0,
    "Runtime(Mins)": 165,
    Censor: "U",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Thriller",
  },
  {
    Movie_Title: "Guardians of the Galaxy",
    Year: 2014,
    Director: "James Gunn",
    Actors: "Chris Pratt, Vin Diesel, Bradley Cooper, Zoe Saldana",
    Rating: 8.0,
    "Runtime(Mins)": 121,
    Censor: "UA",
    Total_Gross: "$333.18M",
    main_genre: "Action",
    side_genre: " Adventure,  Comedy",
  },
  {
    Movie_Title: "Blade Runner 2049",
    Year: 2017,
    Director: "Denis Villeneuve",
    Actors: "Harrison Ford, Ryan Gosling, Ana de Armas, Dave Bautista",
    Rating: 8.0,
    "Runtime(Mins)": 164,
    Censor: "UA",
    Total_Gross: "$92.05M",
    main_genre: "Action",
    side_genre: " Drama,  Mystery",
  },
  {
    Movie_Title: "The Revenant",
    Year: 2015,
    Director: "Alejandro G. Iñárritu",
    Actors: "Leonardo DiCaprio, Tom Hardy, Will Poulter, Domhnall Gleeson",
    Rating: 8.0,
    "Runtime(Mins)": 156,
    Censor: "A",
    Total_Gross: "$183.64M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "Tropa de Elite 2: O Inimigo Agora é Outro",
    Year: 2010,
    Director: "José Padilha",
    Actors: "Wagner Moura, Irandhir Santos, André Ramiro, Milhem Cortaz",
    Rating: 8.0,
    "Runtime(Mins)": 115,
    Censor: "Not Rated",
    Total_Gross: "$0.10M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "Deadpool",
    Year: 2016,
    Director: "Tim Miller",
    Actors: "Ryan Reynolds, Morena Baccarin, T.J. Miller, Ed Skrein",
    Rating: 8.0,
    "Runtime(Mins)": 108,
    Censor: "R",
    Total_Gross: "$363.07M",
    main_genre: "Action",
    side_genre: " Adventure,  Comedy",
  },
  {
    Movie_Title: "Karthikeya 2",
    Year: 2022,
    Director: "Chandoo Mondeti",
    Actors:
      "Nikhil Siddharth, Anupama Parameswaran, Srinivasa Reddy, Harsha Chemudu",
    Rating: 8.0,
    "Runtime(Mins)": 150,
    Censor: "UA",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Adventure,  Fantasy",
  },
  {
    Movie_Title: "Zack Snyder's Justice League",
    Year: 2021,
    Director: "Zack Snyder",
    Actors: "Henry Cavill, Ben Affleck, Gal Gadot, Amy Adams",
    Rating: 8.0,
    "Runtime(Mins)": 242,
    Censor: "18",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Adventure,  Fantasy",
  },
  {
    Movie_Title: "Ip Man",
    Year: 2008,
    Director: "Wilson Yip",
    Actors: "Donnie Yen, Simon Yam, Siu-Wong Fan, Ka-Tung Lam",
    Rating: 8.0,
    "Runtime(Mins)": 106,
    Censor: "R",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Biography,  Drama",
  },
  {
    Movie_Title: "Nefes: Vatan Sagolsun",
    Year: 2009,
    Director: "Levent Semerci",
    Actors: "Mete Horozoglu, Ilker Kizmaz, Baris Bagci, Özgür Eren Koç",
    Rating: 8.0,
    "Runtime(Mins)": 128,
    Censor: "Not Rated",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Drama,  Thriller",
  },
  {
    Movie_Title: "Dune: Part One",
    Year: 2021,
    Director: "Denis Villeneuve",
    Actors: "Timothée Chalamet, Rebecca Ferguson, Zendaya, Oscar Isaac",
    Rating: 8.0,
    "Runtime(Mins)": 155,
    Censor: "UA",
    Total_Gross: "$108.33M",
    main_genre: "Action",
    side_genre: " Adventure,  Drama",
  },
  {
    Movie_Title: "Tropa de Elite",
    Year: 2007,
    Director: "José Padilha",
    Actors: "Wagner Moura, André Ramiro, Caio Junqueira, Milhem Cortaz",
    Rating: 8.0,
    "Runtime(Mins)": 115,
    Censor: "R",
    Total_Gross: "$0.01M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "The Avengers",
    Year: 2012,
    Director: "Joss Whedon",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Jeremy Renner",
    Rating: 8.0,
    "Runtime(Mins)": 143,
    Censor: "UA",
    Total_Gross: "$623.28M",
    main_genre: "Action",
    side_genre: " Adventure,  Sci-Fi",
  },
  {
    Movie_Title: "The Bourne Ultimatum",
    Year: 2007,
    Director: "Paul Greengrass",
    Actors: "Matt Damon, Edgar Ramírez, Joan Allen, Julia Stiles",
    Rating: 8.0,
    "Runtime(Mins)": 115,
    Censor: "UA",
    Total_Gross: "$227.47M",
    main_genre: "Action",
    side_genre: " Mystery,  Thriller",
  },
  {
    Movie_Title: "Taegukgi hwinalrimyeo",
    Year: 2004,
    Director: "Je-kyu Kang",
    Actors: "Jang Dong-Gun, Won Bin, Eun-ju Lee, Hyeong-jin Kong",
    Rating: 8.0,
    "Runtime(Mins)": 140,
    Censor: "R",
    Total_Gross: "$1.11M",
    main_genre: "Action",
    side_genre: " Drama,  War",
  },
  {
    Movie_Title: "Casino Royale",
    Year: 2006,
    Director: "Martin Campbell",
    Actors: "Daniel Craig, Eva Green, Judi Dench, Jeffrey Wright",
    Rating: 8.0,
    "Runtime(Mins)": 144,
    Censor: "UA",
    Total_Gross: "$167.45M",
    main_genre: "Action",
    side_genre: " Adventure,  Thriller",
  },
  {
    Movie_Title: "Kill Bill: Vol. 2",
    Year: 2004,
    Director: "Quentin Tarantino",
    Actors: "Uma Thurman, David Carradine, Michael Madsen, Daryl Hannah",
    Rating: 8.0,
    "Runtime(Mins)": 137,
    Censor: "A",
    Total_Gross: "$66.21M",
    main_genre: "Action",
    side_genre: " Crime,  Thriller",
  },
  {
    Movie_Title: "Mou gaan dou",
    Year: 2002,
    Director: "Directors:Andrew Lau, Alan Mak",
    Actors: "Andy Lau, Tony Chiu-Wai Leung, Anthony Chau-Sang Wong, Eric Tsang",
    Rating: 8.0,
    "Runtime(Mins)": 101,
    Censor: "UA",
    Total_Gross: "$0.17M",
    main_genre: "Action",
    side_genre: " Crime,  Drama",
  },
  {
    Movie_Title: "The Incredibles",
    Year: 2004,
    Director: "Brad Bird",
    Actors: "Craig T. Nelson, Samuel L. Jackson, Holly Hunter, Jason Lee",
    Rating: 8.0,
    "Runtime(Mins)": 115,
    Censor: "U",
    Total_Gross: "$261.44M",
    main_genre: "Animation",
    side_genre: " Action,  Adventure",
  },
  {
    Movie_Title: "Shin seiki Evangelion Gekijô-ban: Air/Magokoro wo, kimi ni",
    Year: 1997,
    Director: "Directors:Hideaki Anno, Kazuya Tsurumaki",
    Actors: "Megumi Ogata, Megumi Hayashibara, Yûko Miyamura, Kotono Mitsuishi",
    Rating: 8.0,
    "Runtime(Mins)": 87,
    Censor: "Not Rated",
    Total_Gross: "$0.00M",
    main_genre: "Animation",
    side_genre: " Action,  Drama",
  },
  {
    Movie_Title: "Andaz Apna Apna",
    Year: 1994,
    Director: "Rajkumar Santoshi",
    Actors: "Aamir Khan, Salman Khan, Raveena Tandon, Karisma Kapoor",
    Rating: 8.0,
    "Runtime(Mins)": 160,
    Censor: "U",
    Total_Gross: "$0.00M",
    main_genre: "Action",
    side_genre: " Comedy,  Romance",
  },
];
