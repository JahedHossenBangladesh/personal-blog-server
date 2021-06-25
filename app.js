const express = require('express');

const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app =express();
//middle ware
app.use(cors())
app.use(bodyParser.json());
app.use(morgan('dev'))

//router

app.get('*',(req,res) =>{
    res.json({
        data:'This is your data'
    })
})

const port = process.env.PORT || 8000

app.listen(port,() => console.log(`port is listenining is ${port} `))