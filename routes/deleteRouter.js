const express = require('express')
const deleteRouter = express.Router();

const db = require('../models');
const Bookmark = db['Bookmark'];

deleteRouter.delete('/:id', async (req, res) => {
 //console.log(req);
 //console.log(req.params.id);

  //Bookmark = req.app.locals.bookmark
  // Store the data using sequelize
    await Bookmark.destroy({
        where: {
            id: req.params.id    //req.app.locals.bookmark = bookmark

        }
        })
    //req.app.locals.bookmark = bookmark
    // POST the bookmark data
    res.redirect('/');
})

deleteRouter.post('/delete', async (req, res) => {

    // Store the data using sequelize
    try {
    await Bookmark.destroy({
        where: {
            url: req.body.dropdown
        }
        })
        console.log(req.body.dropdown);
    } catch (err) {
        console.log(err);
    }

    // POST the bookmark data
    res.redirect('/');
})


module.exports = deleteRouter;