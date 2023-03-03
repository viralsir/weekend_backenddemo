let fs=require("fs");
fs.readFile("first.txt",(err,data)=>{
       if(!err)
       {
           console.log(data.toString());
       }
})
console.log("statement1");
console.log("statement2");