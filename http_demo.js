let http=require("http");
let server=http.createServer((request,response)=>{
     response.end("<h1>Welcome to the world of node js how may i help you ?</h1>");

})

server.listen(9090,()=>{
    console.log("server is running at port no 9090")
})

