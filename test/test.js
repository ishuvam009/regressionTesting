const autocannon = require('autocannon');


const urls = ['http://localhost:4000','http://localhost:4000/reqTwo'];
const duration = 30;

urls.forEach(url => {
    const instance = autocannon({
        url,duration
    }, (err,result) =>{
        if(err){
            console.log('Error',err);
        }else {
            console.log('URL: ',url)
            console.log('No of request: ',result.requests.total);
            console.log('Duration (second): ',result.duration);
        }
    });
    
    autocannon.track(instance);
});