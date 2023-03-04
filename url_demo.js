let url=require("url");
let urldetail="http://locahost:9090/simpleapp?name=vimal&age=12"

//console.log(urldetail);
let urlref=url.parse(urldetail,true);
console.log(urlref);
console.log("host =>",urlref.host);
console.log("pathname:",urlref.pathname);
console.log(urlref.query);
console.log(urlref.query.name);
console.log(urlref.query.age);

