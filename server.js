const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to my hotel .....! How i can help you?')
});

app.get('/Chicken', function (req, res) {
    res.send('Sure sir ,I would love to serve chicken....!')
  });

  app.get('/Idli', function (req, res) {
    res.send('Welcome to south India we love to serve Idli Vada....!')
  })
  

app.listen(3000)



// const notes = require("./notes.js")
// var _ = require('lodash');

// console.log('server file is available....!');

// var age = notes.age;
// console.log(age);

// var data = ["person","person",1,2,1,2,'name','age','2'];
// var filter = _.uniq(data);
// console.log(filter);
// console.log(_.isString("samadbaig"));


// var arr = [1,2,3];

// _.reverse(arr);
// console.log(arr)

// console.log("server file is running on 3000");



// function add(a,b) {
//     return a+b;
    
// }

// var result = add(51,15);
// console.log(result);


// function callback() {
//     console.log("Riyaz is calling callback function");
    
// }


// const add = function (a,b, callback) {
//     var result = a+b;
//     console.log('result: '+ result);
//     callback();
    
// }

// add(45,5,callback);


// var fs = require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile("greeting.txt", 'Hi '+ user.username + '!\n', ()=>{
//     console.log('file is created....!');
// });

// console.log(os);
// console.log(fs);