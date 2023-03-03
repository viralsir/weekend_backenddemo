let fs=require("fs");
fs.readFile("emp.json",(err, data) => {
    if(!err)
    {
        let empString=data.toString();
        console.log(empString);
        let empjson=JSON.parse(empString);  // convert string (text) into json
        console.log("id :",empjson.id);
        console.log("name:",empjson.name);
        console.log("Age is :",empjson.age);


    }
})