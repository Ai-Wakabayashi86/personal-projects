import { Movie } from "@/types/movie";
import { MovieCard } from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
};

export function MovieList({ movies }: MovieListProps) {
  return (
    <section className="movie-list">
      <h2>今日はこの3本なら“今”かもしれません。</h2>

      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          genre={movie.genre}
          reason={movie.reason}
        />
      ))}
    </section>
  );
}