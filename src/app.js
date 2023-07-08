//# 13 complete web development course project

/*
nodejsYoutube> mkdir expressWeb
cd expressWeb> src > type nul > app.js
   expressWeb> npm init                   // for package.json file      > author:dharm technical
   expressWeb> npm i express
*/

/*
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

//public static path

//console.log(path.join(__dirname,"../public"));
const static_path = path.join(__dirname,"../public")

app.use(express.static(static_path));

// routing      app.get(route,callback)
app.get("", (req, res) => {
    res.send("welcome to dharm technical channel");
});

app.get("/about", (req, res) => {
    res.send("welcome to dharm technical About channel");
});

app.get("/weather", (req, res) => {
    res.send("welcome to dharm technical weather channel");
});

app.get("*", (req, res) => {
    res.send("404 error page opps");
});

app.listen(port, () => {
console.log(`listening to the port at ${port}`);
});
*/
//npm install hbs            mkdir views    cd views   index.hbs about.hbs weather.hbs 404error.hbs            
//expressWeb>nodemon src/app.js
//hbs file edit krne per nodemonka use krne ke liye  nodemon src/app.js -e js,hbs
const express = require("express");
const path = require("path");
const hbs = require("hbs");                 // for partial file ke liye
const app = express();
const port = process.env.PORT || 8000;

//public static path
//console.log(path.join(__dirname,"../public"));
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing  for hbs use render in place send
app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render("404error", {
        errorMsg: "Opps! Page Not Found , Click Here to go"
    });
});

app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
});

//#14
/* by cmd ya gitbase
 SSH secure shell or ssh is used to create a secure channel between a local and remote computer.while ssh is commonly used for secure terminal access and
 file tranfers, it can also be used to create a secure tunnel between computers for forwarding other network connections that are not normally encrypted 
expressWeb>git status              //initialize hai ki nhi check           fatal error aaye to git init
          >git init
          >git status                                            // red dikhege
          >git add .                                             // for single git add public  
          >git commit -m "nodejs project first commit"
          >git status                                            // on branch master

          github
          create new repo   webproject
          git remote add origin https://github.com/dharmendravlog/webproject.git

          >git remote                                            //none
          >git remote add origin https://github.com/dharmendravlog/webproject.git
          >git remote                                            //origin


          for ssh key use gitbase
          >ls ~/.ssh                                            // error

          >ssh-keygen -t rsa -b 4096 -C "dharmendra.developers@gmail.com"
          //path           enter
          //password       enter enter
          >ctrl+c
          >ls ~/.ssh       id_rsa id_rsa.pub 

          private key rsa ko sys me add krne ke liye agent chahiye ssh ka live hona chahiye
          
          >eval ${ssh-agent -s}        Agent pid 1394  //make sure live hoga to agent pid aaygi milegi
          
          >ssh-add -K /Users/Dell/.ssh/id_rsa or ssh-add -K ~/.ssh/id_rsa

          >cat ~/.ssh/id_rsa.pub    
          
          jo bhi code aaye use copy krke github me profilesetting me ssh key me new key generate krke title name de and key me code paste kare

          sys or github me proper secure connection estabilish ho gya hai ki nhi check

          in cmd
          >ssh -T git@github.com                                   //  first bar yes            

          >git remote                                              //origin
          >git branch                                              * master 
          >git push -u origin master

          //in future hmne apne project me kuch kuch edit kiya to 

          >git status                                     file red
          >git add.
          >git status                                     file grren
          >git commit -m "adding back button"
          */