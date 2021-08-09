// Requests to Index 
const express = require('express')
const Router = express.Router();
//const {models,sequelize} = require('../models_old');

const db = require('../models');
const sequelize = db.sequelize;
const Bookmark = db['Bookmark'];
const Comment = db['Comment'];

const indexRouter = Router.get('/', async (req, res) => {

    const bookmarks = await Bookmark.findAll({
       attributes: ['id','name', 'url','tag']
    })

    const comments = await Comment.findAll({
      attributes: ['id','text', 'bookmark id']
    })

    //console.log(bookmarks);
    //console.log(bookmarks.id);

    req.app.locals.bookmark = Bookmark;
    req.app.locals.comment = Comment;
    // console.log(Comment);
    // console.log(req.app.locals.comment)
    // console.log(req.app.locals.bookmark)

    res.render('index.ejs', {bookmarks: bookmarks, comments: comments});
  })

module.exports = indexRouter;