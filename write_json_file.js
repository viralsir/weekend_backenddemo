let fs=require("fs")
let emp={id:1,name:"vimal",age:24}
let empString=JSON.stringify(emp);  // to convert json to text
fs.writeFile("emp.json",empString,{flag:"a+"},err => {
    if(!err)
    {
        console.log("json data store in a file");
    }
})
console.log("writing data into file");