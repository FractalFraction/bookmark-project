const express = require('express')
const addTag = express.Router();

const db = require('../models');
const Tag = db['Tag'];

addTag.post('/addTag', async (req, res) => {
    const tag = req.body.tag;
    
    await Tag.create(
        {
          name: tag
        }
    );
    res.redirect('/');
})


module.exports = addTag;