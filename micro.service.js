const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/',(req,res) => {
    for(let i = 0; i <= 100000000; i++){
    }
    res.send('Hello from server 1.');
})

app.listen(3002,()=>{
    console.log('App is running at port 3000.');
})