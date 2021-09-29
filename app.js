const express = require('express');

const app = express();

app.use('/users',(req,res,next)=>{
    res.send("this is users page");
});

app.use('/',(req,res,next)=>{
    res.send("hello word");
});
app.listen(3000);