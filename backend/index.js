const express = reuire('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

app.use(express.json());
app.use(cors());

// DATABASE CONNECTION
mongoose.connect("mongodb+srv://SWE:4CTKXB@4cdatabase.47pub.mongodb.net/SweApp?retryWrites=true&w=majority");
//functionality
app.get('/read', async (req, res) => {
    UserModel.find({}, (result) => {
        res.send(results)
    })
});

app.put('/update', async (req, res) => {
    const clubToRemove = req.body.clubToRemove;
    const user = req.body.user;
    //FILL
})

//Port listening
app.listen(3001, () => {
    console.log("SERVER CONNECTED")
});