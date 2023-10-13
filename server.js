const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const StudentRoutes= require('./app/routes/index.server.routes');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://santiagocarreno05:zS31VIjlc1JGPHkv@cluster0.0unoubr.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("DB connected......")
})

app.use('/', StudentRoutes);

app.listen(8081,()=>{
    console.log("Server is running on 8081....");
});