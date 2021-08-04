require('dotenv').config()

const express = require('express');
const methodOverride = require('method-override')
const app = express();

const port = 3000;

const {models,sequelize} = require('./models');

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'))

const indexRouter = require('./routes/index');
const addRouter = require('./routes/add');
//Require more routers here

app.use('/',indexRouter);
app.use('/',addRouter);
//Add more routers here

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

    // POST the bookmark data
    res.redirect('/');
})

app.post('/update-button/:id', async (req, res) => {

    res.render('update', { id: req.params.id
        })
})

app.put('/:id', async (req,res) => {

    await models.Bookmark.update({
        tag: req.body.updateTag,
        comment: req.body.updateComment},{
        where: {
            id: req.params.id
        }
    })

    res.redirect('/')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})