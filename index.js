const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/',(req,res) =>{
    res.send('Hello from server.');
})

app.listen(3000,()=> {
    console.log('Server is running at port 3000.');
});