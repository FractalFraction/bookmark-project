require('dotenv').config()

const express = require('express');
const methodOverride = require('method-override')
const app = express();

const port = 3000;

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
app.use('/bookmark', deleteRouter);
app.use('/edit', editRouter);
app.use('/comment:bookmarkId', addCommentRouter);
app.use('/', addTagRouter);
app.use('/', bookmarkAddTag);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})