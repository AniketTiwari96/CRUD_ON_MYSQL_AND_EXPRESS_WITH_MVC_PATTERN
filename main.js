const express=require('express')
const app=express();
const port=3000;

const router = require('./route/route');
app.use(express.json())

app.use('/',router)


app.listen(port,()=>{
    console.log(`your server running on this port ${port}`);
})