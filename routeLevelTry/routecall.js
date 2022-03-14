const express=require('express');
const port =808;
const app=express();
const route = require('./route');
app.use(route);
app.listen(port,()=>console.log('started'));