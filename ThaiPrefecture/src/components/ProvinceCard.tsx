// src/components/ProvinceCard.tsx

import { Province } from "../types/province";

type ProvinceCardProps = {
  province: Province;
};

export function ProvinceCard({ province }: ProvinceCardProps) {
  return (
    <div>
      <h2>{province.nameJa}</h2>

      <p>
        <strong>タイ語：</strong>
        {province.nameTh}
      </p>

      <p>
        <strong>英語：</strong>
        {province.nameEn}
      </p>

      <p>
        <strong>地域：</strong>
        {province.region}
      </p>

      <p>
        <strong>地形：</strong>
        {province.terrain.join("、")}
      </p>

      <p>
        <strong>特産品：</strong>
        {province.specialties.join("、")}
      </p>

      <p>
        <strong>特徴：</strong>
        {province.features.join("、")}
      </p>
    </div>
  );
}