// src/pages/study.tsx

import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { ProvinceCard } from "../components/ProvinceCard";
import { ThailandMap } from "../components/ThailandMap";
import { provinces } from "../data/provinces";
import {
  loadProgress,
  markAsLearned,
  saveProgress,
} from "../hooks/useProgress";

export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const province = provinces[currentIndex];

  useEffect(() => {
    const currentProgress = loadProgress();
    const updatedProgress = markAsLearned(
      currentProgress,
      province.id
    );

    saveProgress(updatedProgress);
  }, [province.id]);

  const goPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? provinces.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === provinces.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Layout>
      <section className="study-header">
        <div>
          <h2>📖 学習</h2>
          <p>タイの県について学びましょう</p>
        </div>

        <div className="study-count">
          {currentIndex + 1} / {provinces.length}
        </div>
      </section>

      <section className="study-grid">
        <ProvinceCard province={province} />
        <ThailandMap province={province} />
      </section>

      <section className="tips-card">
        <h3>💡 豆知識</h3>
        <p>
          {province.nameJa} は、
          {province.features.join("、")} が特徴です。
        </p>
      </section>

      <div className="study-actions">
        <button onClick={goPrevious}>← 前へ</button>
        <button onClick={goNext}>次へ →</button>
      </div>
    </Layout>
  );
}