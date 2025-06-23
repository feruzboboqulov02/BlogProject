const express = require('express');
const route = express.Router();
const Post= require('../models/Post');
const User= require('../models/Post');
const { sort } = require('mathjs');

const adminLayouts= '../views/layouts/admin'

route.get('/admin', async (req, res) => {
    try {
        const locals={
            title: 'Admin',
            description: 'A simple blog built with NodeJS and EJS'
        }
        
        res.render('admin/index',{ locals,layout:adminLayouts });
    } catch (error) {
        console.log(error);
    }
})



route.post('/admin', async (req, res) => {
    try {
        const{username,password}= req.body
        if(req.body.username=='admin' && req.body.password==password){
            res.send('You are successfully logged in');
        }else{

            res.send('Wrong password or username');
        }

    } catch (error) {
        console.log(error);
    }
})




module.exports = route