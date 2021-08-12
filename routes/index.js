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
       include:[
      {
        model: Comment,
        required: false,
        attributes: ['text']
      }, 
      {
        model: Tag,
        required: false,
        attributes: ['name']
      }
    ]
    })

    console.log("Bookmarks");
    console.log(bookmarks);

    // bookmarks.map(bookmark => {
    //   // console.log("Bookmark Comments")
    //   // console.log(bookmark.Comments)
    //   console.log("Bookmark Tags")
    //   console.log(bookmark.Tags)
    //   console.log(bookmark.Tags[0])
    //   console.log(bookmark.Tags[1]);
    // });


    const comments = await Comment.findAll({
      attributes: ['id','text', 'BookmarkId']
    })

    const tags = await Tag.findAll({
      attributes: ['name']
    })

    res.render('index.ejs', {bookmarks: bookmarks, comments: comments, tags: tags});
  })

module.exports = indexRouter;
