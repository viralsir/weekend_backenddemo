let express=require("express")
const {response, request, urlencoded, json} = require("express");

let app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

employee={"id":1,"name":"amit","age":23}


app.get("/simpletext",(request,response)=>{
    response.send("simplet text send from the express js");
})
app.get("/simplejson",(request,response)=>{
    response.json({"id":1,"name":"amit","age":23});
})

app.get("/singlequerystring",(request,response)=>{
     console.log(request.query.id);
     console.log(request.query.name)
     response.send("get the query string ")
})
app.get("/multiplequerystring",(request,response)=>{
    console.log("id:",request.query.id);
    console.log("age:",request.query.age);
    response.send("get multiple query string");
})
app.get("/singleparam/:id",(request,response)=>{
    console.log("id:",request.params.id)
    response.send("single param get");
})


app.get("/employee/:id",(request,response)=>{
     let employee=employees.find(emp=>emp.id==request.params.id)
    if(employee != undefined)
    {
        response.json(employee);
    }
    else
    {
        response.send("wrong id for employee");
    }
})
app.get("/multipleparam/:eid/:age",(request,response)=>{
    console.log("id:",request.params.eid);
    console.log("age:",request.params.age);
    response.send("multiple parameter got");
})
/*
      create  , view ,update , delete

      /employee/create
      /employee/view
      /employee/update
      /employee/delete


       Rest api

            employee   get view
                      post new /create
                      put  update
                      delete delete
 */


employees=[
    {"id":1,"name":"vimal","age":23},
    {"id":2,"name":"vimal","age":25},
    {"id":3,"name":"viren","age":26},
    {"id":4,"name":"vishal","age":27},
]

// rest api
app.get("/employees",(request,response)=>{
    response.json(employees);
})
app.get("/employees/:id",(request,response)=>{
    let employee=employees.find(emp=>emp.id==request.params.id)
    if(employee != undefined)
    {
        response.json(employee);
    }
    else
    {
        response.send("wrong id for employee");
    }
})

app.post("/employees",(request,response)=>{
    employees.push(request.body);
    response.send("new is record is inserted");
})
app.put("/employees",(request,response)=>{
    response.send("put method called for update the employee record");
})

app.delete("/employees",(request,response)=>{
    response.send("delete method is called for delete the employee record");
})




app.listen(9090,()=>{console.log("server is running at port no:9090")})

// rest api
//  localhost:9090/employee?id=1&name="vimal"
// http methods
// localhost:9090/employee  - get  view
// localhost:9090/employee  - post  new  params
// localhost:9090/employee - put    update
// localhost:9090/employee - delete  delete
