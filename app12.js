const express = require('express');

const app = express();

const members=[
    {
        id:1,
        name:'Rohini',
        email:'rohi@gmail.com',
        status:'active'
    },
    {
        id:2,
        name:'Rona',
        email:'rona@gmail.com',
        status:'active'
    },
    {
        id:3,
        name:'sriiimental',
        email:'monkey@gmail.com',
        status:'intive'
    },
];

app.get('/api/members',(req,res) =>{
    res.json(members);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=>console.log('server started...'));
    
