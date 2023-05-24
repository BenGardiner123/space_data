import { BlackHole, Planet } from "./space";

class Galaxy {
  name: string;
  age: number;
  planets: Planet[];
  black_holes: BlackHole[];

  constructor(
    name: string,
    age: number,
    planets: Planet[],
    black_holes: BlackHole[]
  ) {
    this.name = name;
    this.age = age;
    this.planets = planets;
    this.black_holes = black_holes;
  }
}

export default Galaxy;
