// src/components/ThailandMap.tsx

import { Province } from "../types/province";

type ThailandMapProps = {
  province: Province;
};

function getMapFileName(province: Province) {
  if (province.mapFileName) {
    return province.mapFileName;
  }

  return province.nameEn.replaceAll(" ", "_");
}

export function ThailandMap({ province }: ThailandMapProps) {
  const fileName = getMapFileName(province);
  const mapSrc = `/maps/${fileName}.svg`;

  return (
    <div className="map-card">
      <h3>タイ全土の地図</h3>

      <div className="map-wrapper">
        <img
          src={mapSrc}
          alt={`${province.nameJa} が色付けされたタイ地図`}
          className="thailand-map"
        />
      </div>
    </div>
  );
}