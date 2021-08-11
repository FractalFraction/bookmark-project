const express = require('express')
const deleteRouter = express.Router();

const db = require('../models');
const Bookmark = db['Bookmark'];

deleteRouter.delete('/:id', async (req, res) => {
    await Bookmark.destroy({
        where: {
            id: req.params.id 
        },
        truncate: true,
        cascade: true
        })
    res.redirect('/');
});

module.exports = deleteRouter;