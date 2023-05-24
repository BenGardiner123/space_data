import Galaxy from "./models/galaxy";
import { writeFile } from "../src/utils/fileOutput";
import "./index.css";

const solarSystem = new Galaxy(
  "Milky Way",
  13.6,
  [
    {
      name: "Mercury",
      distance_from_sun: 0.39,
      moons: [],
    },
    {
      name: "Venus",
      distance_from_sun: 0.72,
      moons: [],
    },
    {
      name: "Earth",
      distance_from_sun: 1,
      moons: [
        {
          name: "Moon",
          distance_from_planet: 0.00257,
        },
      ],
    },
    {
      name: "Mars",
      distance_from_sun: 1.52,
      moons: [
        {
          name: "Phobos",
          distance_from_planet: 9.378,
        },
        {
          name: "Deimos",
          distance_from_planet: 23.46,
        },
      ],
    },
  ],
  [
    {
      name: "Sagittarius A*",
      mass: 4.31e6,
      distance_from_earth: 25000,
      discovery_date: "1974-12-23",
    },
    {
      name: "Cygnus X-1",
      mass: 14.8,
      distance_from_earth: 6050,
      discovery_date: "1964-05-20",
    },
  ]
);

export default function App() {
  const customSpaceDataOutputObject = {
    galaxy: {
      name: solarSystem.name,
      age: solarSystem.age,
    },
    // remember .map() returns a new array
    planets: solarSystem.planets.map((planet) => ({
      name: planet.name,
      distance_from_sun: planet.distance_from_sun,
      // only include moons that are further than 10 units away
      moons: planet.moons
        .filter((moon) => moon.distance_from_planet > 10)
        // create a new array of just the names
        .map((moon) => moon.name)
        .join(", "),
    })),
    black_holes: solarSystem.black_holes.map((blackHole) => ({
      name: blackHole.name.toString().toUpperCase(),
      mass: blackHole.mass,
      distance_from_earth: blackHole.distance_from_earth,
      discovery_date: blackHole.discovery_date,
    })),
  };

  const handleExportClick = () => {
    const output = writeFile(customSpaceDataOutputObject);
  };

  return (
    <div className="App">
      <h1>You are in the {customSpaceDataOutputObject.galaxy.name}</h1>
      <h2>Click the export button to export it</h2>

      <button onClick={handleExportClick}>Export to File</button>
    </div>
  );
}
