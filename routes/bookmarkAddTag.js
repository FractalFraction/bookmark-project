const express = require('express')
const bookmarkAddTag = express.Router();

const db = require('../models');
const Tag = db['Tag'];
const BookmarkTags = db['BookmarkTags'];

bookmarkAddTag.post('/:bookmarkId', async (req, res) => {
  const currentTag = await Tag.findOne({
    where: {
      name: req.body.tag
    }
  })

  await BookmarkTags.findOrCreate({
    where:
    {
      BookmarkId: req.params.bookmarkId,
      TagId: currentTag.id
    }
  });

  res.redirect('/');
})

module.exports = bookmarkAddTag;