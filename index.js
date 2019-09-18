const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', require('./routes'));

mongoose.connect('mongodb://localhost:27017/ticket', {useNewUrlParser:true, useUnifiedTopology:true})
    .catch((err)=>{
        console.log(err);
    })
    .then(()=>{
        console.log('Database connected successfully');
    })

app.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`);
})