// src/data/north.ts

import { Province } from "../types/province";

export const north: Province[] = [
  {
    id: 1,
    nameJa: "チェンマイ県",
    nameTh: "เชียงใหม่",
    nameEn: "Chiang Mai",
    region: "北部",
    terrain: ["山地", "盆地"],
    specialties: ["コーヒー", "工芸品"],
    features: ["旧市街", "寺院", "北部文化"],
  },
  {
    id: 2,
    nameJa: "チェンライ県",
    nameTh: "เชียงราย",
    nameEn: "Chiang Rai",
    region: "北部",
    terrain: ["山地"],
    specialties: ["お茶", "コーヒー"],
    features: ["ゴールデントライアングル"],
  },
];