//express code is used for the node elements 
const express = require('express');
const app = express();
const port = 3000; // The port being used is 3000

app.use(express.urlencoded({ extended: true }));

//Used to send the contact HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

//When the form submits, a message to the client-side from the server-side
app.post('/submit-form', (req, res) => {
    const FLname = req.body.FLname; //Used to indicate Name and Email
    const email = req.body.email; 

    res.send(`Thank you, ${FLname}. I will message you shortly at ${email}.`);
    }); 
    //Sends a personal message and shows that request has been received

app.listen(port, () => {
    console.log(`Server running on https://cyrusthegreat03.github.io/Project-Milestone-Three/${port}`);
}); 
//Indicates which website the server should run on, using port 3000
