require('dotenv').config()

const express = require('express');
const app = express();

const port = 3000;

const {models,sequelize} = require('./models');

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));

// Requests to Index 
app.get('/',  (req, res) => {
  res.render('index.ejs');
})

app.post('/', async (req, res) => {
    
    // Store the data using sequelize
    await models.Bookmark.create(
        {
          url:  req.body.tag ,
          tag: req.body.url,
          comment: req.body.comment
        }
        )
        console.log(req.body.tag);
        console.log(req.body.url);
        console.log(req.body.comment);

    // POST the bookmark data
    res.redirect('index.ejs');
})


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})