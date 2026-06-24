// src/data/provinces.ts

import { north } from "./north";
import { northeast } from "./northeast";
import { central } from "./central";
import { east } from "./east";
import { south } from "./south";

export const provinces = [
  ...north,
  ...northeast,
  ...central,
  ...east,
  ...south,
];