require('dotenv').config()

const express = require('express');
const methodOverride = require('method-override')
const app = express();

const port = 3000;

//const {models,sequelize} = require('./models_old');

// Need to figure out how to access models within the db. 
// Load the db and reset the tables each time. 
//const db = require('./models');
//const sequelize = db.sequelize;
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

//const Bookmark = db['Bookmark'];

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'))

const indexRouter = require('./routes/index');
const addRouter = require('./routes/addRouter');
const deleteRouter = require('./routes/deleteRouter');
const editRouter = require('./routes/editRouter');
const addCommentRouter = require('./routes/addCommentRouter');
const addTagRouter = require('./routes/addTag');
const bookmarkAddTag = require('./routes/bookmarkAddTag'); 


//Require more routers here
app.use('/',indexRouter);
app.use('/',addRouter);
app.use('/', deleteRouter);
app.use('/ ', editRouter);
app.use('/', addCommentRouter);
app.use('/', addTagRouter);
app.use('/', bookmarkAddTag);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})