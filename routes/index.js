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

  //   console.log("Bookmarks");
  //   console.log(bookmarks)
  //  // console.log("Bookmark Id")
  //   //console.log(bookmarks[0].id);
  //   console.log(bookmarks.Comments);

    // console.log("Bookmark Model");
    // console.log(Bookmark); 
    // console.log("bookmarks")
    // console.log(bookmarks);

    const comments = await Comment.findAll({
      attributes: ['id','text', 'BookmarkId']
    })

    const tags = await Tag.findAll({
      attributes: ['name']
    })

    // console.log("Tags");
    // console.log(tags);
    // console.log("comments");
    // console.log(comments);
    // console.log("Comment")
    // console.log(Comment);

    res.render('index.ejs', {bookmarks: bookmarks, comments: comments, tags: tags});
  })

module.exports = indexRouter;