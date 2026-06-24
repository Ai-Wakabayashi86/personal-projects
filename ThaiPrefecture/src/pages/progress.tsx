// src/pages/progress.tsx

import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { provinces } from "../data/provinces";
import {
  initialProgress,
  loadProgress,
  Progress,
  resetProgress,
} from "../hooks/useProgress";

export default function ProgressPage() {
  const [progress, setProgress] = useState<Progress>(initialProgress);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const handleReset = () => {
    resetProgress();
    setProgress(initialProgress);
  };

  const learnedCount = progress.learnedProvinceIds.length;
  const totalCount = provinces.length;
  const progressRate = Math.round((learnedCount / totalCount) * 100);

  const totalAnswers = progress.correctAnswers + progress.wrongAnswers;
  const correctRate =
    totalAnswers === 0
      ? 0
      : Math.round((progress.correctAnswers / totalAnswers) * 100);

  return (
    <Layout>
      <h2>学習状況</h2>

      <button onClick={handleReset}>
        学習状況をリセット
      </button>

      <section>
        <h3>進捗</h3>
        <p>
          {learnedCount} / {totalCount} 県を学習済み
        </p>
        <p>達成率：{progressRate}%</p>
      </section>

      <section>
        <h3>クイズ成績</h3>
        <p>正解数：{progress.correctAnswers}</p>
        <p>不正解数：{progress.wrongAnswers}</p>
        <p>正答率：{correctRate}%</p>
      </section>

      <section>
        <h3>県ごとの状況</h3>

        <ul>
          {provinces.map((province) => {
            const isLearned = progress.learnedProvinceIds.includes(province.id);

            return (
              <li key={province.id}>
                {province.nameJa}：{isLearned ? "学習済み" : "未学習"}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}