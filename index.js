const express = require('express'); //imported express
const app = express();  // declared express

app.get('', (req, res) => {
    console.log("data sent by browser");
    res.send('hello' + req.query.name)
})

app.get('/about', (req, res) => {  // Basic get method
    res.send('about')
})

app.get('/test', (req, res) => {  // getting query params 
    res.send(`
    <input type="text" placeholder="Name" value="${req.query.name}"> 
    <button> Click me </button>
    `)
})

app.get('/menu', (req, res) => {
    res.send({
        name: "Tanuj",
        age: 24
    })
})

app.get('/menu', (req, res) => {
    res.send({
        name: "Tanuj",
        age: 24
    })
})

app.listen(5000);