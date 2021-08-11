require('dotenv').config()

const db = require('../models');
const Bookmark = db['Bookmark'];

const createTestBookmark = () => {
    Bookmark.create({
        name : 'Reddit',
        url: 'www.reddit.com',
        tag: 'procrastination'
      });

     Bookmark.create({
        name : 'Cats',
        url: 'www.cats.co.uk',
        tag: 'cats'
      });

      Bookmark.create({
        name : 'Warhammer',
        url: 'www.warhammer.com',
        tag: 'gaming'
      });

}

module.exports = createTestBookmark;