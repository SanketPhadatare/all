const express = require('express');
const app= express();
const fs = require("fs");



const PORT = 8000

app.use(express.static('public'));

app.get('/',(req,res)=>{
    // res.sendFile('./nav.html', {root: __dirname})
    res.sendFile('./public/form.html', {root: __dirname}) ;
});

app.listen(PORT, function(){

 console.log(`Server listening on port::${PORT}`);

});