export type Province = {
  id: number;
  nameJa: string;
  nameTh: string;
  nameEn: string;
  region: string;
  terrain: string[];
  specialties: string[];
  features: string[];

  mapPosition?: {
    x: number;
    y: number;
  };
};