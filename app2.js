const express = require('express');
const app = express();
const port = 3000;

// 
app.use(express.urlencoded({ extended: true }));

// 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/submit-form', (req, res) => {
    const FLname = req.body.FLname; 
    const email = req.body.email; // access form data


    res.send(`Thank you, ${FLname}. I will message you shortly at ${email}.`);
    });


// Thank you, ${FLname}. I will message you shortly at ${email}.

// Start the server

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});