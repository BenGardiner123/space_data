const fs = require("fs");
function writeFile(stringToWrite: string) {
  fs.writeFile("output.txt", stringToWrite, function (err: Error) {
    if (err) throw err;
    console.log("Data has been written to file successfully!");
  });
}

export default writeFile;
