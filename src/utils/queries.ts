import { apiRequest } from "./baseFetch";
import { Genre, Movies, MovieDetails } from "../interfaces/movieInterfaces";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

export const useQueryGenres = () => {
  const queryKey = ["genres"] as const;
  const queryFn = async () => {
    const data = await apiRequest<Genre[]>("/api/genres");
    return data;
  };

  return useQuery({ queryKey, queryFn });
};

export const useQueryMovies = (page: number, genres: number[]) => {
  const queryKey = ["genres", page, genres] as const;
  const queryFn = async (context: QueryFunctionContext<typeof queryKey>) => {
    const page = context.queryKey[1];
    const genres = context.queryKey[2];
    const data = await apiRequest<Movies>(`/api/movies?page=${page}&genres=[${genres}]`);
    return data;
  };

  return useQuery({ queryKey, queryFn });
};

export const useQueryMovie = (id: number) => {
  const queryKey = ["genres", id] as const;
  const queryFn = async (context: QueryFunctionContext<typeof queryKey>) => {
    const id = context.queryKey[1];
    const data = await apiRequest<MovieDetails>(`/api/movie/${id}`);
    return data;
  };

  return useQuery({ queryKey, queryFn });
};
