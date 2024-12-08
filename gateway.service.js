const express = require('express');
const proxy = require('express-http-proxy')

const app = express();

app.use('/',proxy('http://localhost:3001'));
app.use('/reqTwo',proxy('http://localhost:3002'))

app.listen(3000,()=>{
    console.log('App is running at port 3000.');
});