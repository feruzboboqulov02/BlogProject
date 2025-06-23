require ('dotenv').config();
const connectdb= require('./server/config/db');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
connectdb();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const expressLayout = require('express-ejs-layouts');

app.use(express.static('public'));

app.use(expressLayout)
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');



app.use('/', require('./server/routes/main.js'));
app.use('/', require('./server/routes/admin.js'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Export the app for testing purposes
module.exports = app;