const express = require('express');
const { size } = require('lodash');
const app = express();
const db = require('./db');
const person = require("./person");

const bodyParser = require('body-parser');
const Person = require('./person');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome to my hotel .....! How i can help you?  We have list of menus...!')
});

app.post('/person', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// app.get('/Chicken', function (req, res) {
//     res.send('Sure sir ,I would love to serve chicken....!')
//   });

//   app.get('/Idli', function (req, res) {
//     var customized_idli ={
//       name: "Rava Idli",
//       size: '12 cm diameter',
//       is_sambar: true,
//       is_chutony: false,

//     }
//     res.send(customized_idli)
//   });

//   app.get('/Dal', function (req, res) {
//     res.send('Sure sir ,I would love to serve  south indean Dal Chawal....!')
//   });

//   app.post('/items', function(res,req){
//     res.send('data is saved')
//   })


  

app.listen(3000, ()=>{
  console.log("server is running on port 3000....!");
})



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