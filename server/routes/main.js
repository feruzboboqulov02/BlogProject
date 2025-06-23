const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    const locals={
        title: 'NodeJS Blog',
        description: 'A simple blog built with NodeJS and EJS'
    }
    res.render('index',{ locals });
})

route.get('/about', (req, res) => {
    res.render('about');
})

module.exports = route;