const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
const textOut = `This is what we know about the avocado: ${textIn}`;

console.log(textIn);
fs.writeFileSync("./txt/output.txt", textOut);
