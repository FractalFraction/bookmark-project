const express = require('express')
const Router = express.Router();
//const {models,sequelize} = require('../models');
const db = require('../models');
const Bookmark = db['Bookmark'];


const addRouter = Router.post('/', async (req, res) => {
    
    // Modify the create method to check 
    // if the url already exists and if so tell the user 
    //bookmark = req.app.locals.bookmark

    try {
    // Store the data using sequelize
    await Bookmark.create(
        {
          name: req.body.name,
          url:  req.body.url
        })

        res.redirect('/');
    } catch(error) {
        console.log(error);
    }

    //req.app.locals.bookmark = bookmark

    res.redirect('/');
    // POST the bookmark data
   
})

module.exports = addRouter;