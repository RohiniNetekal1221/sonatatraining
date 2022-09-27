

const express = require('express');
const app = express();
const path = require('path');

/*app.get("/",(req,res)=>{
    //res.send('<center><h1>Welcome to Express JS!!<h1><center>')
 //res.sendFile(path.join(__dirname,'public','index.html'));
});*/
app.use(express.static(path.join(__dirname,'public')));
const port = process.env.port || 4200;
app.listen(port, ()=>console.log(`server started on port ${port}`));

