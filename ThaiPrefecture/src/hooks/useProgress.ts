// src/hooks/useProgress.ts

export type Progress = {
  learnedProvinceIds: number[];
  correctAnswers: number;
  wrongAnswers: number;
};

const STORAGE_KEY = "thai-province-progress";

export const initialProgress: Progress = {
  learnedProvinceIds: [],
  correctAnswers: 0,
  wrongAnswers: 0,
};

export function loadProgress(): Progress {
  if (typeof window === "undefined") {
    return initialProgress;
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return initialProgress;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return initialProgress;
  }
}

export function saveProgress(progress: Progress): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );
}

export function markAsLearned(
  progress: Progress,
  provinceId: number
): Progress {
  if (progress.learnedProvinceIds.includes(provinceId)) {
    return progress;
  }

  return {
    ...progress,
    learnedProvinceIds: [
      ...progress.learnedProvinceIds,
      provinceId,
    ],
  };
}

export function addCorrectAnswer(
  progress: Progress
): Progress {
  return {
    ...progress,
    correctAnswers: progress.correctAnswers + 1,
  };
}

export function addWrongAnswer(
  progress: Progress
): Progress {
  return {
    ...progress,
    wrongAnswers: progress.wrongAnswers + 1,
  };
}

export function resetProgress(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
}