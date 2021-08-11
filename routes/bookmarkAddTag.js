const express = require('express')
const bookmarkAddTag = express.Router();

const db = require('../models');
const Tag = db['Tag'];
const BookmarkTags = db['BookmarkTags'];

bookmarkAddTag.post('/tag:bookmarkId', async (req, res) => {
  //const tagname = req.body.tag;
  const currentTag = await Tag.findOne({
    where: {
      name: req.body.tag
    }
  })
  
  //const tagId = currentTag.id;

  // const bookmarkId = req.params.bookmarkId;
  // console.log(bookmarkId)

  BookmarkTags.create(
    {
      BookmarkId: req.params.bookmarkId,
      TagId: currentTag.id
    })

  res.redirect('/');
})

module.exports = bookmarkAddTag;