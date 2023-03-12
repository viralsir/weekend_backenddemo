let express=require("express")
let body_parser=require("body-parser")

let app=express();

//app.use(express.urlencoded({extended:false}));
app.use(body_parser.urlencoded({extended:true}))

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

app.get("/",(req, res) => {
     res.sendFile(__dirname+"/login.html");
})
users=[{"user":"admin","pass":"123"},
       {"user":"vimal","pass":"456"},
       {"user":"vishal","pass":"345"}
      ]
app.post("/checkuser",(req, res) => {
    //req.query["user"]
    console.log(req.body);

     let founduser=users.find(ele=>ele.user==req.body.user && ele.pass==req.body.pass);
   /* let isfound=false;
    for (let i = 0; i < users.length; i++) {
          if(users[i].user==req.query.user && users[i].pass==req.query.pass)
          {
              isfound=true;break;
          }

    }*/
         if(founduser!=undefined)
        //if(isfound==true)
        //if(req.query.user=="admin" && req.query.pass=="123")
        {
            res.sendFile(__dirname+"/home.html");
        }
        else
        {
            res.send("<h1>wrong username or password </h1> <br/> <a href='/'>try again Login</a>");
        }
})

app.post("/adduser",(req, res) => {
      users.push(req.body);
      console.log(users);
      res.send("<h1> New User has been added successfully </h1> <a href='/'>Login</a>");
})

app.get("/signup",(req, res) => {
    res.sendFile(__dirname+"/signup.html");
})
app.listen(9090,()=>{console.log("server is started on 9090")});

