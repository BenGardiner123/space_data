export interface Moon {
  name: string;
  distance_from_planet: number;
}

export interface Planet {
  name: string;
  distance_from_sun: number;
  moons: Moon[];
}

export interface BlackHole {
  name: string;
  mass: number;
  distance_from_earth: number;
  discovery_date: string;
}
