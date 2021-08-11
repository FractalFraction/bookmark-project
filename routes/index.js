// Requests to Index 
const express = require('express')
const Router = express.Router();
//const {models,sequelize} = require('../models_old');

const db = require('../models');
//const sequelize = db.sequelize;
const Bookmark = db['Bookmark'];
const Comment = db['Comment'];
const Tag = db['Tag'];

const indexRouter = Router.get('/', async (req, res) => {

    const bookmarks = await Bookmark.findAll({
       attributes: ['id','name', 'url'],
      //  includes: {all: true}
       includes: {
        model: Comment,
        attributes:['text']
    }
    })

    const comments = await Comment.findAll({
      attributes: ['id','text', 'BookmarkId']
    })

    const tags = await Tag.findAll({
      attributes: ['name']
    })

    res.render('index.ejs', {bookmarks: bookmarks, comments: comments, tags: tags});
  })

module.exports = indexRouter;