interface MovieCommon {
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface Movie extends MovieCommon {
  genre_ids: number[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Movies {
  page: number;
  results: Movie[];
  total_pages: number;
}

export interface MovieDetails extends MovieCommon {
  genres: Genre[];
  video: {
    path: string;
    type: string;
    official: boolean;
  }[];
}
