require('dotenv').config()
const {models,sequelize} = require('../models_old');

const createTestBookmark = () => {
    models.Bookmark.create({
        name : 'Reddit',
        url: 'www.reddit.com',
        tag: 'procrastination'
      });

     models.Bookmark.create({
        name : 'Cats',
        url: 'www.cats.co.uk',
        tag: 'cats'
      });

      models.Bookmark.create({
        name : 'Warhammer',
        url: 'www.warhammer.com',
        tag: 'gaming'
      });

}

module.exports = createTestBookmark;