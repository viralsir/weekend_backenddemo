let express=require("express")
let body_parser=require("body-parser")

let app=express();

app.use(express.urlencoded({extended:false}));

app.get("/home",(req, res) => {
    // res.send("<h1>Wel come to the world of express js </h1>");
    res.sendFile(__dirname+"/home.html");
    console.log(__dirname)
})

app.get("/aboutus",(req, res) => {
    //res.send("<h1> About us page </h1>");
    res.sendFile(__dirname+"/aboutus.html");
})

app.get("/contactus",(req, res) => {
    //res.send("<h1> Contact us page </h1>");
    res.sendFile(__dirname+"/contactus.html");
})


app.listen(9090,()=>{console.log("server is started on 9090")});

