// src/data/central.ts

import { Province } from "../types/province";

export const central: Province[] = [
  {
    id: 201,
    nameJa: "バンコク都",
    nameTh: "กรุงเทพมหานคร",
    nameEn: "Bangkok",
    region: "中部",
    terrain: ["平野", "河川"],
    specialties: ["商業", "屋台料理"],
    features: ["首都", "王宮", "チャオプラヤー川"],
  },
  {
    id: 202,
    nameJa: "アユタヤ県",
    nameTh: "พระนครศรีอยุธยา",
    nameEn: "Ayutthaya",
    region: "中部",
    terrain: ["平野", "河川"],
    specialties: ["川魚"],
    features: ["世界遺産", "アユタヤ遺跡"],
  },
  {
    id: 203,
    nameJa: "ロッブリー県",
    nameTh: "ลพบุรี",
    nameEn: "Lopburi",
    region: "中部",
    terrain: ["平野"],
    specialties: ["ひまわり"],
    features: ["猿の町"],
  },
  {
    id: 204,
    nameJa: "スパンブリー県",
    nameTh: "สุพรรณบุรี",
    nameEn: "Suphan Buri",
    mapFileName: "Suphanburi",
    region: "中部",
    terrain: ["平野"],
    specialties: ["米"],
    features: ["農業地帯"],
  },
  {
    id: 205,
    nameJa: "ナコーンパトム県",
    nameTh: "นครปฐม",
    nameEn: "Nakhon Pathom",
    region: "中部",
    terrain: ["平野"],
    specialties: ["果物"],
    features: ["世界最大級の仏塔"],
  },
];