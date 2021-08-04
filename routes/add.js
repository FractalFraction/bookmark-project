const express = require('express')
const Router = express.Router();
//const {models,sequelize} = require('../models');


const addRouter = Router.post('/', async (req, res) => {
    
    // Modify the create method to check 
    // if the url already exists and if so tell the user 
    bookmark = req.app.locals.bookmark

    try {
    // Store the data using sequelize
    await bookmark.create(
        {
          url:  req.body.url,
          tag: req.body.tag,
          comment: req.body.comment
        })

        res.redirect('/');
    } catch(error) {
        console.log('Validation Error: URLs must be Unique!')
    }

    req.app.locals.bookmark = bookmark

    res.redirect('/');
    // POST the bookmark data
   
})

module.exports = addRouter;