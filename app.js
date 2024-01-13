
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const contactsRouter = require('./routes/contacts'); 

const port = process.env.PORT || 8080;
const app = express();

app
   .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/contacts', contactsRouter )
  .use('/', contactsRouter );
 


mongodb.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on PORT: ${port}`);
  }
});