const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const ClubModel = require('./models/Club')

app.use(express.json());
app.use(cors());

// DATABASE CONNECTION
mongoose.connect("mongodb+srv://SWE:4CTKXB@4cdatabase.47pub.mongodb.net/SweApp?retryWrites=true&w=majority");
//functionality
app.get('/read', async (req, res) => {
    ClubModel.find({}, (err,result) => {
        if (err) {
            res.json(error)
        } else {
            res.json(result) // sending back info 
        }
    })
    res.send("yay!")
});

app.post('/addclub', async (req,res) => {
    const title = "penguin club";
    const desc = "This is the penguin Club";

    const club = new ClubModel({title: title, desc: desc});
    await club.save();
    res.send("yay!")
})

app.delete('/delete/:id', async (req,res) => {
    const id = req.params.id;
    await ClubModel.findByIdAndRemove(id).exec();
})

//Port listening
app.listen(3001, () => {
    console.log("SERVER CONNECTED")
});
