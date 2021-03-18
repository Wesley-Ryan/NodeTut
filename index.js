const fs = require("fs"); //file system
const http = require("http"); //networking

//Blocking
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
const textOut = `This is what we know about the avocado: ${textIn}`;

console.log(textIn);
fs.writeFileSync("./txt/output.txt", textOut);

//Non Blocking
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) {
    return console.log(err.message);
  }
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written🤥");
      });
    });
  });
});

//Networking "Server"
const server = http.createServer((req, res) => {
  res.end("Hello from the server 😁");
});

server.listen(7777, "127.0.0.1", () => {
  console.log("server go brrrrpppppppp");
});
