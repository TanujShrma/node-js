const express = require('express'); // Imported express
const reqFilter = require('./middleware') // Imported Route Level Middleware from different file
const app = express(); // Created instance of express
const route = express.Router(); // Created instance of express router


//Using middleware to modify response 
// const reqFilter = (req, res, next) => {
//     if (!req.query.age) {
//         res.send("Please provide age")       // This is Application Level Middleware 
//     }                                        
//     else if (req.query.age < 18) {
//         res.send("You're too young")
//     }
//     else {
//         next();
//     }
// }

// app.use(reqFilter) // Application Level Middleware 

route.use(reqFilter)

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.get('/users', reqFilter, (req, res) => {
    // reqFilter ---- Route level middleware for single route 
    res.send("Users");
})

route.get('/about', (req, res) => { // Used route to use middleware with multiple routes
    res.send("About");
})

route.get('/new', (req, res) => {  // Used route to use middleware with multiple routes
    res.send("New");
})

app.use('/', route) // Configured middleware 

app.listen(5000)
