
const fs = require("fs");

// let readingFile = fs.readFileSync("text.txt", "utf8");
// let readFile = fs.readFile("text.txt", "utf8", (err, data) => {

//     console.log("Line number 7: "+ data);
//   })

  // let writeFilesync = fs.writeFileSync("server.txt", "I am a web developer.")
  
  // let writeFile = fs.writeFileSync("data.txt", "I am a web developer if you want scalable web appp so use next.js", "utf-8", (err,data) => {
  //   if(err){
  //       console.log(err);
  //   }

  //   console.log(data);
    
  // })

// console.log(readingFile);
// console.log(readFile);
// console.log("file created successfully");

const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server has been created successfully");
})


server.listen(5500, "127.0.0.1", () => {
    console.log("server listening on port 5500");
})