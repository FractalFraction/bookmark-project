// Requests to Index 
const express = require('express')
const Router = express.Router();
const {models,sequelize} = require('../models');

const indexRouter = Router.get('/', async (req, res) => {

    const bookmarks = await models.Bookmark.findAll({})
    req.app.locals.bookmark = models.Bookmark;

    res.render('index.ejs', {bookmarks: bookmarks});
  })

module.exports = indexRouter;