const express = require('express');
const editRouter = express.Router();

const db = require('../models');
const Bookmark = db['Bookmark'];

editRouter.post('/update-button:id', (req, res) => {
  console.log('Go to update page!')
  console.log(req.params.id);

  //res.render('update.ejs');
  res.render('update.ejs', {
      id: req.params.id
  })
})


editRouter.put('/update:id', async (req, res) => {
  console.log('Update a Bookmark!')

  //bookmark= req.app.locals.bookmark

  try {
    await Bookmark.update(
        {deadline: req.body.deadline},{
        where : {
            id: req.params.id
        }
    })
  } catch (err) {
    console.log(err)
  }

  res.redirect('/');
})

module.exports = editRouter;