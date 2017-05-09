var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.use("/public", express.static(__dirname + "/public"));


router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

//what we use to route our site
router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/archanaPage",function(req,res){
  res.sendFile(path + "archanaPage.html");
});


app.use("/",router);

// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
