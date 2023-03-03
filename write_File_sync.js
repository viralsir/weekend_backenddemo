let fs=require("fs");
let msg="Wel come to the node js using file sync\n";
fs.writeFileSync("first.txt",msg,{flag:"a+"});
console.log("Data stored");
console.log("normal statement1");
