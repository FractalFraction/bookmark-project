require('dotenv').config()
const {models,sequelize} = require('../models');

const updateTestBookmark = () => {
    models.Bookmark.update({
        tag: 'conversation',
        comment: 'titter-tatter'},
        {
            where: {
                url: 'hello.com'
            }
        })
      };


module.exports = updateTestBookmark;