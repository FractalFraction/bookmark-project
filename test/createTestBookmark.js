require('dotenv').config()
const {models,sequelize} = require('../models');

const createTestBookmark = () => {
    models.Bookmark.create({
        url: 'hello.com',
        tag: 'gossip',
        comment: 'rubbish'
      });
}

module.exports = createTestBookmark;