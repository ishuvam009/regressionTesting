const express = require('express');
const morgan = require('morgan');
const cluster = require('cluster');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    console.log(`Forking ${numCPUs} workers....`);

    // Fork workers for each CPU core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for dying workers and replace them
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    const app = express();
    app.use(morgan('dev'));

    app.get('/', (req, res) => {
        // for (let i = 0; i <= 100; i++) {
        //     // Simulating delay
        // }
        res.send(`Hello from worker ${process.pid}`);
    });

    app.listen(3002, () => {
        console.log(`Worker ${process.pid} started`);
    });
}