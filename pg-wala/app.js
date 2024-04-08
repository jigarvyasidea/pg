const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const seedDb =  require('./seed');


mongoose.connect('mongodb://127.0.0.1:27017/pg-app')
.then( ()=>{
    console.log('db connect sucessfully');
})
.catch( (err)=>{
    console.log('error in  db  ');
    console.log(err);
});

app.set('view engine ', 'ejs');
app.set('views', path.join(__dirname , 'views'));



//public ke folder ke liye 
app.use(express.static(path.join(__dirname , 'public')));

//seeding db 
seedDb();

app.listen(8080 , ()=>{
    console.log('app connect at  port 8080')
})