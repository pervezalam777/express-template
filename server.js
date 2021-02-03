//@ts-nocheck
const path = require('path');

const express = require('express');
const helmet = require('helmet');

const adminRouter = require('./routes/adminRouter');
const authRouter = require('./routes/authRouter');

const app = express();
app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.get('/', (req, res) => {
  res.render('index')
})
app.all('*', (req, res) => {
  //TODO: render 404 page with render method
  res.status(404).render('page404');
})

const port = process.env.PORT || 5000;
app.listen(port, err => {
  if(err){
    console.error(`Server failed to start ${err.message}`);
    return;
  }
  console.log(`server started at port ${port}`);
});

