// Require the Express module 
const express = require('express'); 
// Create const for event handler
const child_process = require('child_process');

// Create an Express web application 
const app = express(); 

// Specify how to respond to GET / 
app.get('/', (req, res) => { 
    //Run the system 'fortune' command and respond with the msg
    child_process.exec('fortune',(error, message) => {
        if(error == null) {
            res.send(message + 'Today is ' + Date());
        } else {
            res.send('Error:' + error);
        }

    })
}); 
// Start listening for HTTP requests on port 3000 
app.listen(3000, () => { 
    console.log('Server started'); 
}); 