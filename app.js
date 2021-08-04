require('dotenv').config()

const express = require('express');
const methodOverride = require('method-override')
const app = express();

const port = 3000;

const {models,sequelize} = require('./models');

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'))

// Requests to Index 
app.get('/', async (req, res) => {

  const bookmarks = await models.Bookmark.findAll({})

  res.render('index.ejs', {bookmarks: bookmarks});
})


// const promise = async (req, res) => {
    
//     // Modify the create method to check 
//     // if the url already exists and if so tell the user 

//     // Store the data using sequelize
//     await models.Bookmark.create(
//         {
//           url:  req.body.url,
//           tag: req.body.tag,
//           comment: req.body.comment
//         })
//     }


app.post('/', async (req, res) => {
    
    // Modify the create method to check 
    // if the url already exists and if so tell the user 
    
    try {
    // Store the data using sequelize
    await models.Bookmark.create(
        {
          url:  req.body.url,
          tag: req.body.tag,
          comment: req.body.comment
        })

        //res.redirect('/');
    } catch(error) {
        console.log('Validation Error: URLs must be Unique!')
    }

    res.redirect('/');
    // POST the bookmark data
   
})

// Dropdown deletion
app.post('/delete', async (req, res) => {

    // Store the data using sequelize
    await models.Bookmark.destroy({
        where: {
            url: req.body.dropdown
        }
        })
        console.log(req.body.dropdown);

    // POST the bookmark data
    res.redirect('/');
})

// Delete via Button
app.delete('/:id', async (req, res) => {

// Store the data using sequelize
    await models.Bookmark.destroy({
        where: {
            id: req.params.id
        }
        })
        console.log('ID');
        console.log(req.params.id);

    // POST the bookmark data
    res.redirect('/');

})

app.post('/update', async (req, res) => {

    // Store the data using sequelize
    await models.Bookmark.update({
        tag: req.body.updateTag,
        comment: req.body.updateComment},{
        where: {
            url: req.body.update
        }
        })
        console.log(req.body.dropdown);

    // POST the bookmark data
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})