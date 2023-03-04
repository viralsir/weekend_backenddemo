let http=require("http")
let url=require("url")

let calcform = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calc form</title>
</head>
<body>
<form action="calc" >
        <table>
            <tr>
                <th colspan="2" align="center">
                    Calculator
                </th>
            </tr>
            <tr>
                <th> No1 :</th>
                <td><input type="number" name="no1" >  </td>
            </tr>
            <tr>
                <th> No2 :</th>
                <td><input type="number" name="no2" >  </td>
            </tr>
            <tr>
                <th colspan="2" align="center">
                    <input type="submit" value="Answer">
                    <input type="reset" value="clear">
                </th>
            </tr>
        </table>
</form>
</body>
</html>`;



let server=http.createServer((req, res) => {
    console.log(req.url);
    //res.end("<h1> hello from node");

    let urlinfo=url.parse(req.url,true);
    if(urlinfo.path != "/favicon.ico")
    {
        if(urlinfo.path == "/aboutus")
        {
            res.write("<h1>this is a About Us Page </h1>");
        }
        else if(urlinfo.path == "/contactus")
        {
            res.write("<h1> this is a Contactus Page </h1>");
            
        }
        else if(urlinfo.path == "/calcform"){
                res.write(calcform);
        }
        else if(urlinfo.pathname=="/calc")
        {
              let no1=parseInt(urlinfo.query.no1);
              let no2=parseInt(urlinfo.query.no2);

              res.write(`<html><body>Answer : ${(no1+no2)}`);
              res.write('<a href="calcform">calcform</a></body></html>');
        }
        else
        {
            res.write("<h1> this is a Home page </h1>");
        }
    }
    res.end();
})

server.listen("9090",()=>{ console.log("server is running at 9090")});