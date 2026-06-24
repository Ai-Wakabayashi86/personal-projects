// src/pages/quiz.tsx

import { useState } from "react";
import { Layout } from "../components/Layout";
import { QuizCard } from "../components/QuizCard";
import { provinces } from "../data/provinces";
import {
  addCorrectAnswer,
  addWrongAnswer,
  loadProgress,
  saveProgress,
} from "../hooks/useProgress";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentProvince = provinces[currentIndex];

  const question = `${currentProvince.nameJa} の地域はどこ？`;
  const correctAnswer = currentProvince.region;
  const choices = ["北部", "中部", "東北部", "南部"];

  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(answer);

    const currentProgress = loadProgress();

    const updatedProgress =
      answer === correctAnswer
        ? addCorrectAnswer(currentProgress)
        : addWrongAnswer(currentProgress);

    saveProgress(updatedProgress);
  };

  const goNext = () => {
    setSelectedAnswer(null);

    setCurrentIndex((prev) =>
      prev === provinces.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Layout>
      <h2>確認クイズ</h2>

      <p>
        {currentIndex + 1} / {provinces.length}
      </p>

      <QuizCard
        question={question}
        choices={choices}
        selectedAnswer={selectedAnswer}
        correctAnswer={correctAnswer}
        onSelectAnswer={handleSelectAnswer}
      />

      {selectedAnswer !== null && (
        <button onClick={goNext}>次の問題へ</button>
      )}
    </Layout>
  );
}