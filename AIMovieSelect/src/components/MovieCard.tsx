import { Movie } from "@/types/movie";

type MovieCardProps = Movie;

export function MovieCard({ title, genre, reason }: MovieCardProps) {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <p className="genre">{genre}</p>
      <p>{reason}</p>
    </div>
  );
}