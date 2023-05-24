interface CustomSpaceDataOutputObject {
  galaxy: {
    name: string;
    age: number;
  };
  planets: {
    name: string;
    distance_from_sun: number;
    moons: string;
  }[];
  black_holes: {
    name: string;
    mass: number;
    distance_from_earth: number;
    discovery_date: string;
  }[];
}

export const writeFile = (stringToWrite: CustomSpaceDataOutputObject) => {
  console.log("writeFile called", JSON.stringify(stringToWrite, null, 2));

  const element = document.createElement("a");
  const file = new Blob([JSON.stringify(stringToWrite, null, 2)], {
    type: "text/plain",
  });

  element.href = URL.createObjectURL(file);
  element.download = "output.txt";

  document.body.appendChild(element); // Required for this to work in Firefox
  element.click();

  document.body.removeChild(element); // Clean up the temporary element
};
