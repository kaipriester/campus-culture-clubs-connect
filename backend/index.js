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
});

app.post('/addclub', async (req,res) => {
    const title = req.body.title;
    const desc = req.body.desc;

    const club = new ClubModel({title: title, desc: desc});
    await club.save();
    res.send("new data inserted")
});

app.delete('/delete/:id', async (req,res) => {
    const id = req.params.id;
    await ClubModel.findByIdAndRemove(id).exec();
})

//Port listening
app.listen(3001, () => {
    console.log("SERVER CONNECTED")
});
