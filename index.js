const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, 'public')


// Created a view engine

app.set('view engine', 'ejs');


// app.use(express.static(publicPath))

app.get('', (req, resp) => {
    resp.sendFile(`${publicPath}/home.html`)
})

app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/users', (req, resp) => {
    resp.sendFile(`${publicPath}/users.html`)
})

// Added a 404 page

// app.get('*', (req, resp) => {
//     resp.sendFile(`${publicPath}/404.html`)
// })

// using a ejs Template

app.get('/profile', (req, resp) => {

    // Passing a object 
    const user = {
        name: 'Tanuj',
        email: 'tanujsharma110@gmail.com',
        skills: ['Angular', 'Node', 'JS']
    }
    resp.render('profile', { user })
})

app.get('/login', (req, resp) => {


    resp.render('login')
})

app.listen(5000)
// app.use
