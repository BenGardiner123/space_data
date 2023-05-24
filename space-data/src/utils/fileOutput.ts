import Galaxy from "../models/galaxy";

export const writeFile = (stringToWrite: Galaxy) => {
  console.log("writeFile called", JSON.stringify(stringToWrite));
  const element = document.createElement("a");
  const file = new Blob([JSON.stringify(stringToWrite)], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = "output.txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
  document.body.removeChild(element); // Clean up the temporary element
};
