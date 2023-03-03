/*
  fs is core module
  how to write or append data  into file and read data from file .
 */
let fs=require("fs");
var msg="i am fine\n ";
fs.writeFile("first.txt",msg,{flag:"a+"},(err) =>{
    if(!err)
    {
       console.log("data is being stored successfully");
    }

})
console.log("statement2");
console.log("statement3");