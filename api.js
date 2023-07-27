const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
const mongodb = require('mongodb')
app.use(express.json())

//  Get API
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
    console.log(data);
});

// Post API
app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body) // Sending request through Postman API
    res.send(result) // consoling result
})

// Put API
app.put('/:name', async (req, res) => { //Used name parameter
    let data = await dbConnect();
    let result = await data.updateOne(
        // { name: req.body.name } // Updation using the name
        { name: req.params.name }, // Using params to know which record to be updated
        { $set: req.body }) // Sending update request body
    console.log(req.body);
    res.send(result) // consoling result
})

// Delete API

app.delete('/:id', async (req, res) => { //Used id parameter
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) }) // Using params to know which record to be updated
    res.send(result) // consoling result
})

app.listen(5000);