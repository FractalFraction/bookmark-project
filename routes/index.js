// Requests to Index 
const express = require('express')
const Router = express.Router();
//const {models,sequelize} = require('../models_old');

const db = require('../models');
//const sequelize = db.sequelize;
const Bookmark = db['Bookmark'];
const Comment = db['Comment'];

const indexRouter = Router.get('/', async (req, res) => {

    const bookmarks = await Bookmark.findAll({
       attributes: ['id','name', 'url','tag'],
       includes: {all: true}
      //  includes: {
      //   model: Comment,
      //   attributes:['text']
    //}
    })

    // console.log("Bookmark Model");
    // console.log(Bookmark); 
    // console.log("bookmarks")
    // console.log(bookmarks);

    const comments = await Comment.findAll({
      attributes: ['id','text', 'BookmarkId']
    })

    console.log("comments");
    console.log(comments);
    console.log("Comment")
    console.log(Comment);

    res.render('index.ejs', {bookmarks: bookmarks, comments: comments});
  })

module.exports = indexRouter;