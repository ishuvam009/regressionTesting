const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/',(req,res) =>{
    
    for (let i = 0; i < 100000000 ; i++){
    }
    res.send('Hello from server.');
})

app.get('/reqTwo',(req,res) =>{
    
    for(let i = 0; i < 100000000; i++){
    }
    res.send('Hello from server 2.');
})

app.listen(3000,()=> {
    console.log('Server is running at port 3000.');
});