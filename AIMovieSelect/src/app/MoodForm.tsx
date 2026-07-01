"use client";

import { useState } from "react";
import { Movie } from "@/types/movie";
import { MovieList } from "./MovieList";

export function MoodForm() {
  const [mood, setMood] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!mood.trim()) {
      setError("今の気分を入力してください。");
      return;
    }

    setError("");
    setIsLoading(true);
    setMovies([]);

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mood }),
      });

      if (!response.ok) {
        throw new Error("映画の取得に失敗しました。");
      }

      const data = await response.json();
      setMovies(data.movies);
    } catch {
      setError("うまく映画を探せませんでした。もう一度試してください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="mood-form" onSubmit={handleSubmit}>
        <textarea
          value={mood}
          onChange={(e) => {
            setMood(e.target.value);
            setError("");
          }}
          placeholder="例：今日は仕事で疲れたので、何も考えずに笑える映画が見たい。"
          rows={5}
          disabled={isLoading}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "探しています..." : "映画を探す"}
        </button>
      </form>

      {isLoading && (
        <p className="loading-text">
          あなたの「今じゃない」を分析中です...
        </p>
      )}

      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}