import { apiRequest } from "./baseFetch";
import { Genre } from "../interfaces/movie.interfaces";

export function getGenres(): Promise<Genre[]> {
  const path = "/3/genre/movie/list?language=en";
  return apiRequest<Genre[]>(path);
}
