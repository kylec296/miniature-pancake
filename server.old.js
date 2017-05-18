var express = require("express");
var app = express();
var http = require('http').Server(app);
var router = express.Router();

var path = __dirname + '/views/';
var fs = require("fs");
var io = require('socket.io')(http);

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

router.get("/IgorPage", function (req, res) {
    res.sendFile(path + "IgorPage.html");
});

router.get("/kylesPage", function (req, res) {
    res.sendFile(path + "kylesPage.html");
});

app.use("/",router);

// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "public/users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

io.on('connection', function(socket){
  console.log('a user connected');
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
