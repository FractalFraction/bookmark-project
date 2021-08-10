const express = require('express')
const addCommentRouter = express.Router();

// Not sure where the best place for this is

const db = require('../models');
const Comment = db['Comment'];

// Needs an id to know which bookmark to post it to!

addCommentRouter.post('/comment:bookmarkId', async (req, res) => {
    
  // Modify the create method to check 
  // if the url already exists and if so tell the user 

  // console.log(`Bookmark Id: ${req.params.bookmarkId}`);
  // console.log(`Comment Text: ${req.body.text}`)
  // console.log(`Comment Model: ${req.app.locals.comment}`)

  // Store the data using sequelize

  //console.log(req.app.locals.comment);

  //Comment = req.app.locals.comment;
  
  try {
  await Comment.create(
      {
        text: req.body.text,
        BookmarkId: req.params.bookmarkId
      })
    } catch (err) {
      console.log(err);
    }

  //req.app.locals.comment = Comment
  res.redirect('/');
  // POST the bookmark data
})


module.exports = addCommentRouter;